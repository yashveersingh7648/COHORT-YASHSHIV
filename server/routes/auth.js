// const express = require('express');
// const jwt = require('jsonwebtoken');
// const { OAuth2Client } = require('google-auth-library');
// const router = express.Router();

// // Initialize Google client
// const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// router.post('/google', async (req, res) => {
//   try {
//     const { token } = req.body;
    
//     if (!token) {
//       return res.status(400).json({ success: false, message: 'Token is required' });
//     }

//     // Verify Google token
//     // const ticket = await client.verifyIdToken({
//     //   idToken: token,
//     //   audience: process.env.GOOGLE_CLIENT_ID,
//     // });
    
//     const payload = ticket.getPayload();
    
//     // Here you would typically:
//     // 1. Check if user exists in your database
//     // 2. Create new user if doesn't exist
//     // 3. Get the user's ID from your database
    
//     // For this example, we'll just use the Google payload
//     const user = {
//       id: payload.sub,
//       email: payload.email,
//       name: payload.name,
//       picture: payload.picture
//     };
    
//     // Create JWT for your app
//     const appToken = jwt.sign(
//       { 
//         userId: user.id, 
//         email: user.email 
//       },
//       process.env.JWT_SECRET,
//       { expiresIn: '1h' }
//     );
    
//     res.json({ 
//       success: true,
//       token: appToken,
//       user 
//     });
    
//   } catch (error) {
//     console.error('Google auth error:', error);
//     res.status(401).json({ 
//       success: false,
//       message: 'Authentication failed',
//       error: error.message 
//     });
//   }
// });

// module.exports = router;











// const express = require('express');
// const jwt = require('jsonwebtoken');
// const { OAuth2Client } = require('google-auth-library');
// const router = express.Router();
// const User = require('../models/User');

// const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// // Correct endpoint path that matches your frontend call
// router.post('/google', async (req, res) => {
//   try {
//     const { token } = req.body;
    
//     if (!token) {
//       return res.status(400).json({ 
//         success: false, 
//         message: 'Google token is required' 
//       });
//     }

//     // Verify Google token - FIXED: Added missing await and proper variable assignment
//     const ticket = await client.verifyIdToken({
//       idToken: token,
//       audience: process.env.GOOGLE_CLIENT_ID,
//     });
    
//     const payload = ticket.getPayload();
    
//     // Find or create user
//     let user = await User.findOneAndUpdate(
//       { email: payload.email },
//       {
//         $setOnInsert: {
//           googleId: payload.sub,
//           name: payload.name,
//           profilePicture: payload.picture,
//           email: payload.email
//         }
//       },
//       {
//         new: true,
//         upsert: true
//       }
//     );

//     // Create JWT token
//     const authToken = jwt.sign(
//       { 
//         userId: user._id,
//         email: user.email 
//       },
//       process.env.JWT_SECRET,
//       { expiresIn: '1h' }
//     );

//     res.json({ 
//       success: true,
//       token: authToken,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         profilePicture: user.profilePicture
//       }
//     });
    
//   } catch (error) {
//     console.error('Google auth error:', error);
//     res.status(500).json({ 
//       success: false,
//       message: 'Authentication failed',
//       error: error.message 
//     });
//   }
// });

// module.exports = router;









// 23-08-25
// const express = require('express');
// const jwt = require('jsonwebtoken');
// const { OAuth2Client } = require('google-auth-library');
// const router = express.Router();
// const User = require('../models/User');
// const Lender = require('../models/Lender');

// const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// // Generate JWT Token with 12-hour expiration
// const generateToken = (userId) => {
//   return jwt.sign({ id: userId }, process.env.JWT_SECRET, { 
//     expiresIn: '12h' 
//   });
// };

// // Send OTP - FIXED VERSION (Only lender login requires domain validation)
// router.post('/send-otp', async (req, res) => {
//   try {
//     const { email, lenderName, name, userType } = req.body;
//     console.log('Send OTP request:', { email, lenderName, name, userType });

//     // For LENDER login only, validate against lender database
//     if (userType === 'lender' && lenderName !== 'Other') {
//       // Find the lender in database (case-insensitive exact match)
//       const lender = await Lender.findOne({ 
//         lenderName: { $regex: new RegExp('^' + lenderName + '$', 'i') } 
//       });
      
//       if (!lender) {
//         return res.status(404).json({ 
//           success: false, 
//           message: 'Lender not found in our system. Please select a valid lender.' 
//         });
//       }
      
//       // Extract domain from email and validate ONLY for lender login
//       const emailDomain = email.split('@')[1];
//       if (emailDomain !== lender.domain) {
//         return res.status(400).json({ 
//           success: false, 
//           message: `Email domain does not match ${lender.lenderName}. Please use a valid @${lender.domain} email address.` 
//         });
//       }
//     }

//     // For GUEST login, no domain validation required
//     // Check if user exists with this email
//     let user = await User.findOne({ email });
    
//     if (!user) {
//       // Create new user based on user type
//       user = new User({
//         name,
//         email,
//         userType: userType || 'guest',
//         lender: userType === 'lender' ? lenderName : undefined,
//         isVerified: false
//       });
//       await user.save();
//       console.log('New user created:', user);
//     } else {
//       // If user exists but is trying to change user type
//       if (userType && user.userType !== userType) {
//         // If changing to lender, verify domain match
//         if (userType === 'lender' && lenderName !== 'Other') {
//           const lender = await Lender.findOne({ 
//             lenderName: { $regex: new RegExp('^' + lenderName + '$', 'i') } 
//           });
          
//           if (lender) {
//             const emailDomain = email.split('@')[1];
//             if (emailDomain !== lender.domain) {
//               return res.status(400).json({ 
//                 success: false, 
//                 message: `Email domain does not match ${lender.lenderName}. Cannot switch to lender account.` 
//               });
//             }
//           }
//         }
        
//         user.userType = userType;
//         if (userType === 'lender' && lenderName) {
//           user.lender = lenderName;
//         }
//         await user.save();
//       }
      
//       // Update name if provided and different
//       if (name && user.name !== name) {
//         user.name = name;
//         await user.save();
//       }
//     }

//     // Generate OTP
//     const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
//     const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

//     user.otp = {
//       code: otpCode,
//       expiresAt: otpExpires
//     };
    
//     await user.save();

//     // Check if admin email
//     const adminEmails = ['info@ciphershieldtech.com', 'admin@ciphershieldtech.com'];
//     const isAdmin = adminEmails.includes(email.toLowerCase());
    
//     console.log(`OTP for ${email}: ${otpCode}, isAdmin: ${isAdmin}`);

//     // TODO: Implement actual email sending here
//     console.log(`📧 OTP would be sent to ${email}: ${otpCode}`);

//     res.json({
//       success: true,
//       message: 'OTP sent successfully',
//       isGuest: user.userType === 'guest',
//       isAdmin: isAdmin
//     });

//   } catch (error) {
//     console.error('Send OTP error:', error);
//     res.status(500).json({ 
//       success: false, 
//       message: 'Server error: ' + error.message 
//     });
//   }
// });

// // Verify OTP and Login
// router.post('/verify-otp', async (req, res) => {
//   try {
//     const { email, otp, userType, lenderName } = req.body;
//     console.log('Verify OTP request:', { email, otp, userType, lenderName });

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ 
//         success: false, 
//         message: 'User not found. Please try sending OTP again.' 
//       });
//     }

//     // Check OTP
//     if (!user.otp || user.otp.code !== otp) {
//       return res.status(400).json({ 
//         success: false, 
//         message: 'Invalid OTP' 
//       });
//     }

//     if (user.otp.expiresAt < new Date()) {
//       return res.status(400).json({ 
//         success: false, 
//         message: 'OTP has expired. Please request a new one.' 
//       });
//     }

//     // Update user type and lender if needed (with domain validation for lender)
//     if (userType && user.userType !== userType) {
//       if (userType === 'lender' && lenderName !== 'Other') {
//         const lender = await Lender.findOne({ 
//           lenderName: { $regex: new RegExp('^' + lenderName + '$', 'i') } 
//         });
        
//         if (lender) {
//           const emailDomain = email.split('@')[1];
//           if (emailDomain !== lender.domain) {
//             return res.status(400).json({ 
//               success: false, 
//               message: `Email domain does not match ${lender.lenderName}. Cannot switch to lender account.` 
//             });
//           }
//         }
//       }
      
//       user.userType = userType;
//       if (userType === 'lender' && lenderName) {
//         user.lender = lenderName;
//       }
//     }

//     // Check if admin email
//     const adminEmails = ['info@ciphershieldtech.com', 'admin@ciphershieldtech.com'];
//     const isAdmin = adminEmails.includes(email.toLowerCase());
//     user.isAdmin = isAdmin;

//     user.isVerified = true;
//     user.otp = undefined; // Clear OTP after successful verification
//     user.lastLogin = new Date();
    
//     await user.save();

//     // Generate token with 12-hour expiration
//     const token = generateToken(user._id);

//     console.log('Login successful for:', { email, isAdmin, userType: user.userType });

//     res.json({
//       success: true,
//       message: 'Login successful',
//       token,
//       user: {
//         id: user._id,
//         email: user.email,
//         name: user.name,
//         isAdmin: user.isAdmin,
//         isGuest: user.userType === 'guest',
//         lender: user.lender
//       }
//     });

//   } catch (error) {
//     console.error('Verify OTP error:', error);
//     res.status(500).json({ 
//       success: false, 
//       message: 'Server error: ' + error.message 
//     });
//   }
// });

// // Get all lenders for frontend search
// router.get('/lenders', async (req, res) => {
//   try {
//     const { search } = req.query;
//     let query = { isActive: true }; // Only return active lenders
    
//     if (search && search.trim() !== '') {
//       query = {
//         ...query,
//         $or: [
//           { lenderName: { $regex: search, $options: 'i' } },
//           { domain: { $regex: search, $options: 'i' } }
//         ]
//       };
//     }
    
//     const lenders = await Lender.find(query).select('lenderName domain').sort({ lenderName: 1 });
    
//     res.json({
//       success: true,
//       data: lenders || []
//     });
//   } catch (error) {
//     console.error('Get lenders error:', error);
//     res.status(500).json({ 
//       success: false, 
//       message: 'Server error: ' + error.message 
//     });
//   }
// });

// module.exports = router;









// 23-08-25
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../models/User");
const Lender = require("../models/Lender");

// Generate JWT Token with 12-hour expiration
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "12h" });
};

const findLender = async ({ lenderId, lenderName }) => {
  let lender = null;

  // Try by ID first
  if (lenderId && lenderId !== "other") {
    lender = await Lender.findById(lenderId);
  }

  // Try by name
  if (!lender && lenderName && lenderName !== "Other") {
    const cleanName = lenderName.trim();
    const abbreviationMatch = cleanName.match(/\(([^)]+)\)/);
    const abbreviation = abbreviationMatch ? abbreviationMatch[1].trim() : null;

    lender = await Lender.findOne({
      $or: [
        { lenderName: { $regex: `^${cleanName}$`, $options: "i" } },
        { lenderName: { $regex: cleanName, $options: "i" } },
        ...(abbreviation ? [
          { lenderName: { $regex: abbreviation, $options: "i" } },
          { abbreviations: abbreviation.toUpperCase() }
        ] : [])
      ]
    });
  }

  return lender;
};

// SEND OTP
router.post("/auth/send-otp", async (req, res) => {
  try {
    const { email, lenderName, lenderId, name, userType } = req.body;
    console.log("OTP request:", { email, lenderName, lenderId });

    let lender = null;

    if (userType === "lender") {
      lender = await findLender({ lenderId, lenderName });

      if (!lender) {
        return res.status(404).json({
          success: false,
          message: "Lender not found. Please select a valid lender."
        });
      }

      // Flexible email domain validation
      const emailDomain = email.split("@")[1].toLowerCase();
      if (lender.domain && lender.domain !== "other") {
        const expectedDomains = [
          lender.domain.toLowerCase(),
          lender.domain.replace(/\.com$/, '.co.in').toLowerCase(), // pnbgilts.co.in
          lender.domain.replace(/gilts/, '').toLowerCase()          // pnb.com
        ];
        if (!expectedDomains.includes(emailDomain)) {
          return res.status(400).json({
            success: false,
            message: `Email domain does not match ${lender.lenderName}. Please use a valid @${lender.domain} email`,
            expectedDomain: lender.domain
          });
        }
      }
    }

    // Find or create user
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({
        name,
        email,
        userType: userType || "guest",
        lender: userType === "lender" ? lenderName : undefined,
        isVerified: false
      });
      await user.save();
    }

    // Generate OTP
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    user.otp = { code: otpCode, expiresAt: new Date(Date.now() + 10 * 60 * 1000) };
    await user.save();

    console.log(`OTP for ${email}: ${otpCode}`);

    const adminEmails = ["info@ciphershieldtech.com", "admin@ciphershieldtech.com"];
    const isAdmin = adminEmails.includes(email.toLowerCase());

    res.json({ success: true, message: "OTP sent successfully", isGuest: user.userType === "guest", isAdmin });
  } catch (err) {
    console.error("Send OTP error:", err);
    res.status(500).json({ success: false, message: "Server error: " + err.message });
  }
});
// 🔹 RESEND OTP
router.post("/auth/resend-otp", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    user.otp = {
      code: otpCode,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000),
    };
    await user.save();

    console.log(`Resent OTP for ${email}: ${otpCode}`);

    res.json({ success: true, message: "OTP resent successfully" });
  } catch (error) {
    console.error("Resend OTP error:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error: " + error.message });
  }
});

// 🔹 VERIFY OTP
router.post("/auth/verify-otp", async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await User.findOne({ email });

    if (!user || !user.otp || user.otp.code !== otp) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or expired OTP" });
    }

    if (user.otp.expiresAt < Date.now()) {
      return res.status(400).json({ success: false, message: "OTP expired" });
    }

    user.isVerified = true;
    user.lastLogin = new Date();
    user.otp = undefined;
    await user.save();

    const token = generateToken(user._id);

    const adminEmails = [
      "info@ciphershieldtech.com",
      "admin@ciphershieldtech.com",
    ];
    const isAdmin = adminEmails.includes(email.toLowerCase());

    res.json({
      success: true,
      message: "OTP verified successfully",
      user: {
        email: user.email,
        name: user.name,
        userType: user.userType,
        lender: user.lender,
        isAdmin,
        isGuest: user.userType === "guest",
      },
      token,
    });
  } catch (error) {
    console.error("Verify OTP error:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error: " + error.message });
  }
});

// 🔹 GET LENDERS (search by name/domain)
router.get("/lenders", async (req, res) => {
  try {
    const { search } = req.query;
    let query = {}; // ⚡ removed isActive:true (if not present in DB)

    if (search && search.trim() !== "") {
      query = {
        ...query,
        $or: [
          { lenderName: { $regex: search, $options: "i" } },
          { domain: { $regex: search, $options: "i" } },
        ],
      };
    }

    const lenders = await Lender.find(query)
      .select("lenderName domain")
      .sort({ lenderName: 1 });
    res.json({ success: true, data: lenders });
  } catch (error) {
    console.error("Get lenders error:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error: " + error.message });
  }
});

module.exports = router;
