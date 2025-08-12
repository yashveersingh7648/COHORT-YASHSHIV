
// 28-07-25
const crypto = require('crypto');
const OTP = require('../models/OTP');
const Business = require('../models/Business');
const Guest = require('../models/Guest');
const Lender = require('../models/Lender');
const jwt = require('jsonwebtoken');
const transporter = require('../utils/emailSender');

// Configuration
const CONFIG = {
  ADMIN_EMAIL: 'info@ciphershieldtech.com',
  OTP_EXPIRY_MINUTES: 15,
  JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key',
  JWT_EXPIRY: '1d'
};

// Generate JWT token
const generateToken = (email, isAdmin = false, isGuest = false) => {
  return jwt.sign(
    { email, isAdmin, isGuest }, 
    CONFIG.JWT_SECRET, 
    { expiresIn: CONFIG.JWT_EXPIRY }
  );
};


exports.sendOTP = async (req, res) => {
  try {
    const { email, lenderName } = req.body;
    const emailLower = email.toLowerCase();
    const domain = emailLower.split('@')[1];

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please enter a valid email address' 
      });
    }

    // Check if guest user exists
    const guestUser = await Guest.findOne({ email: emailLower });
    
    // Handle guest users (always use "Other" lender)
    if (guestUser) {
      const otp = crypto.randomInt(100000, 999999).toString();
      await OTP.create({
        email: emailLower,
        otp,
        expiresAt: new Date(Date.now() + 15 * 60 * 1000),
        isGuest: true,
        lenderId: guestUser.lender // "Other" lender
      });

      console.log(`Guest OTP for ${emailLower}: ${otp}`);
      return res.json({ 
        success: true,
        message: 'OTP sent to registered guest',
        isGuest: true
      });
    }

    // Handle regular lender login
    const lender = await Lender.findOne({ domain });
    
    // Strict domain matching for non-guest users
    if (!lender) {
      return res.status(400).json({
        success: false,
        message: 'No matching lender found for this domain'
      });
    }

    // Verify selected lender matches domain owner
    if (lender.lenderName !== lenderName) {
      return res.status(400).json({
        success: false,
        message: `Selected lender must be ${lender.lenderName} for ${domain} domain`
      });
    }

    // Generate OTP for valid lender user
    const otp = crypto.randomInt(100000, 999999).toString();
    await OTP.create({
      email: emailLower,
      otp,
      expiresAt: new Date(Date.now() + 15 * 60 * 1000),
      lenderId: lender._id
    });

    const mailOptions = {
      from: `"${CONFIG.SENDER_NAME}" <${CONFIG.SENDER_EMAIL}>`,
      to: email,
      subject: 'Your COHORT Portal Access Code',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">COHORT Portal OTP</h2>
          <p>Your one-time access code is:</p>
          <div style="font-size: 24px; font-weight: bold; margin: 20px 0; padding: 15px; 
               background: #f3f4f6; display: inline-block; letter-spacing: 5px;">
            ${otp}
          </div>
          <p>This code will expire in ${CONFIG.OTP_EXPIRY_MINUTES} minutes.</p>
          <p style="color: #6b7280; font-size: 12px;">
            For security reasons, please do not share this code.
          </p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    console.log(`Lender OTP for ${emailLower}: ${otp}`);
    return res.json({ 
      success: true,
      message: 'OTP sent successfully'
    });

  } catch (error) {
    console.error('OTP Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Error sending OTP'
    });
  }
};


exports.verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    // Validate input
    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        message: 'Email and OTP are required'
      });
    }

    // Verify OTP
    const otpRecord = await OTP.findOne({ 
      email: email.toLowerCase(),
      otp 
    });

    if (!otpRecord) {
      return res.status(400).json({
        success: false,
        message: 'Invalid OTP'
      });
    }

    if (otpRecord.expiresAt < new Date()) {
      await OTP.deleteOne({ _id: otpRecord._id });
      return res.status(400).json({
        success: false,
        message: 'OTP expired'
      });
    }

    // Clean up OTP
    await OTP.deleteOne({ _id: otpRecord._id });

    const isAdmin = email.toLowerCase() === CONFIG.ADMIN_EMAIL.toLowerCase();
    const isGuest = otpRecord.isGuest;

    // Handle guest login
    if (isGuest) {
      const guest = await Guest.findOneAndUpdate(
        { email: email.toLowerCase() },
        { lastLogin: new Date() },
        { new: true }
      );

      if (!guest) {
        return res.status(400).json({
          success: false,
          message: 'Guest account not found'
        });
      }

      const token = generateToken(email.toLowerCase(), false, true);
      
      return res.json({
        success: true,
        message: 'Guest login successful',
        token,
        user: {
          email: guest.email,
          isGuest: true
        },
        redirectTo: '/guest-dashboard'
      });
    }

    // Handle business login
    const business = await Business.findOneAndUpdate(
      { email: email.toLowerCase() },
      { 
        lastLogin: new Date(),
        isAdmin 
      },
      { upsert: true, new: true }
    );

    const token = generateToken(email.toLowerCase(), isAdmin, false);
    
    return res.json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        email: business.email,
        isAdmin: business.isAdmin
      },
      redirectTo: isAdmin ? '/admin-dashboard' : '/bus-dashboard'
    });

  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during OTP verification'
    });
  }
};

exports.resendOTP = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required'
      });
    }

    // Delete existing OTP
    await OTP.deleteMany({ email: email.toLowerCase() });

    // Reuse sendOTP logic
    req.body.lenderName = 'Other'; // Default for resend
    return this.sendOTP(req, res);

  } catch (error) {
    console.error('Error resending OTP:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to resend OTP'
    });
  }
};