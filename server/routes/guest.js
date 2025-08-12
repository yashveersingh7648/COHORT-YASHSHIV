// const express = require('express');
// const router = express.Router();
// const Guest = require('../models/Guest');

// router.post('/signup', async (req, res) => {
//   try {
//     const { email, mobile } = req.body;

//     // Check if guest already exists
//     const existingGuest = await Guest.findOne({ $or: [{ email }, { mobile }] });
//     if (existingGuest) {
//       return res.status(400).json({ 
//         success: false, 
//         message: 'Guest with this email or mobile already exists' 
//       });
//     }

//     // Create new guest
//     const newGuest = new Guest(req.body);
//     await newGuest.save();

//     res.status(201).json({ 
//       success: true, 
//       message: 'Signup successful' 
//     });
//   } catch (err) {
//     console.error('Guest signup error:', err);
//     res.status(500).json({ 
//       success: false, 
//       message: 'Server error during signup' 
//     });
//   }
// });

// module.exports = router;



// 29-07-25
const express = require('express');
const router = express.Router();
const Guest = require('../models/Guest');
const Lender = require('../models/Lender');

router.post('/signup', async (req, res) => {
  try {
    const { email, mobile } = req.body;

    // Validate required fields
    if (!email || !mobile) {
      return res.status(400).json({
        success: false,
        message: 'Email and mobile are required'
      });
    }

    // Check existing user
    const existingUser = await Guest.findOne({ 
      $or: [{ email: email.toLowerCase() }, { mobile }] 
    });
    if (existingUser) {
      return res.status(409).json({ 
        success: false, 
        message: 'User already registered' 
      });
    }

    // Get or create "Other" lender
    let otherLender = await Lender.findOne({ lenderName: "Other" });
    if (!otherLender) {
      otherLender = await Lender.create({
        lenderName: "Other",
        domain: "other",
        isDefault: true
      });
    }

    // Create guest user
    const newGuest = await Guest.create({
      ...req.body,
      lender: otherLender._id,
      isGuest: true
    });

    res.status(201).json({
      success: true,
      message: 'Guest signup successful',
      user: {
        email: newGuest.email,
        isGuest: true,
        lender: "Other"
      }
    });

  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({
      success: false,
      message: 'Server error during signup'
    });
  }
});

router.get('/check', async (req, res) => {
  try {
    const { email } = req.query;
    
    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required'
      });
    }

    const guest = await Guest.findOne({ email: email.toLowerCase() });
    
    res.json({
      success: true,
      exists: !!guest,
      isGuest: guest?.isGuest || false
    });

  } catch (err) {
    console.error('Guest check error:', err);
    res.status(500).json({
      success: false,
      message: 'Server error checking guest'
    });
  }
});

module.exports = router;