// const express = require('express');
// const router = express.Router();
// const Busnies = require('../models/Busnies');

// // Create new business entry
// router.post('/', async (req, res) => {
//   try {
//     const { 
//       companyName,
//       companyType,
//       contactName,
//       designation,
//       productsHandling,
//       companyCity,
//       companyPincode,
//       companyState,
//       companyEmail
//     } = req.body;

//     // Validate required fields
//     if (!companyName || !companyType || !contactName || !designation || 
//         !productsHandling || !companyCity || !companyPincode || !companyState || !companyEmail) {
//       return res.status(400).json({ 
//         success: false, 
//         message: 'All fields are required' 
//       });
//     }

//     // Create new business document
//     const newBusnies = new Busnies({
//       companyName,
//       companyType,
//       contactName,
//       designation,
//       productsHandling,
//       companyCity,
//       companyPincode,
//       companyState,
//       companyEmail
//     });

//     // Save to MongoDB
//     const savedBusnies = await newBusnies.save();

//     res.status(201).json({
//       success: true,
//       message: 'Business details saved successfully',
//       data: savedBusnies
//     });

//   } catch (error) {
//     console.error('Error saving business details:', error);
    
//     // Handle duplicate email error
//     if (error.code === 11000 && error.keyPattern.companyEmail) {
//       return res.status(400).json({
//         success: false,
//         message: 'Email already exists',
//         errors: { companyEmail: 'This email is already registered' }
//       });
//     }
    
//     // Handle validation errors
//     if (error.name === 'ValidationError') {
//       const errors = {};
//       Object.keys(error.errors).forEach(key => {
//         errors[key] = error.errors[key].message;
//       });
//       return res.status(400).json({ 
//         success: false, 
//         message: 'Validation failed',
//         errors 
//       });
//     }

//     res.status(500).json({ 
//       success: false, 
//       message: 'Server error occurred',
//       error: error.message 
//     });
//   }
// });
// // routes/busnies.js
// router.get('/', async (req, res) => {
//   try {
//     const { q = '', field = 'companyName' } = req.query;
    
//     let query = {};
//     if (q) {
//       query[field] = { $regex: q, $options: 'i' }; // Case-insensitive search
//     }

//     const businesses = await Busnies.find(query);
    
//     res.json({
//       success: true,
//       data: businesses
//     });
    
//   } catch (error) {
//     console.error('Search error:', error);
//     res.status(500).json({ 
//       success: false, 
//       message: 'Server error occurred',
//       error: error.message 
//     });
//   }
// });
// module.exports = router;













// 19-07-25
const express = require('express');
const router = express.Router();
const Busnies = require('../models/Busnies');

// Create new business entry
router.post('/', async (req, res) => {
  try {
    // Safely prepare data with defaults
    const businessData = {
      companyName: req.body.companyName?.trim() || "",
      companyType: req.body.companyType || "",
      contactName: req.body.contactName?.trim() || "",
      designation: req.body.designation?.trim() || "",
      productsHandling: req.body.productsHandling || "",
      companyCity: req.body.companyCity?.trim() || "",
      companyPincode: req.body.companyPincode?.toString().replace(/\D/g, '').slice(0, 6) || "",
      companyState: req.body.companyState || "",
      companyEmail: req.body.companyEmail?.trim().toLowerCase() || "",
      userId: req.body.userId || null, // Can be null
      userEmail: req.body.userEmail?.trim().toLowerCase() || ""
    };

    // Validate required fields
    const requiredFields = {
      companyName: 'Company Name',
      companyType: 'Company Type',
      contactName: 'Contact Name',
      designation: 'Designation',
      productsHandling: 'Products Handling',
      companyCity: 'City',
      companyPincode: 'Pincode',
      companyState: 'State',
      companyEmail: 'Business Email',
      userEmail: 'User Email'
    };

    const missingFields = Object.entries(requiredFields)
      .filter(([field]) => !businessData[field])
      .map(([_, name]) => name);

    if (missingFields.length > 0) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields',
        missingFields
      });
    }

    const newBusnies = new Busnies(businessData);
    const savedBusnies = await newBusnies.save();

    res.status(201).json({
      success: true,
      message: 'Business saved successfully',
      data: savedBusnies
    });

  } catch (error) {
    console.error('Error saving business:', error);
    
    if (error.name === 'ValidationError') {
      const errors = {};
      Object.keys(error.errors).forEach(key => {
        errors[key] = error.errors[key].message;
      });
      return res.status(400).json({ 
        success: false, 
        message: 'Validation failed',
        errors 
      });
    }

    res.status(500).json({ 
      success: false, 
      message: 'Server error',
      error: error.message 
    });
  }
});

// Get all businesses
router.get('/', async (req, res) => {
  try {
    const { q = '', field = 'companyName' } = req.query;
    
    const query = q ? { 
      [field]: { $regex: q, $options: 'i' } 
    } : {};

    const businesses = await Busnies.find(query)
      .sort({ createdAt: -1 })
      .lean();

    res.json({
      success: true,
      count: businesses.length,
      data: businesses
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch businesses',
      error: error.message
    });
  }
});

// Public route for businesses
router.get('/public', async (req, res) => {
  try {
    const businesses = await Busnies.find()
      .sort({ createdAt: -1 })
      .limit(50); // Limit to 50 recent businesses

    res.json({
      success: true,
      data: businesses
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch businesses',
      error: error.message
    });
  }
});

module.exports = router;