const Busnies = require('../models/Busnies');

exports.createBusnies = async (req, res) => {
  try {
    // Add user email from auth if not provided
    if (!req.body.userEmail && req.user) {
      req.body.userEmail = req.user.email;
    }

    // Validate required fields
    const requiredFields = [
      'companyName', 'companyType', 'contactName', 
      'designation', 'productsHandling', 'companyCity',
      'companyPincode', 'companyState', 'companyEmail',
      'userEmail'
    ];

    const missingFields = requiredFields.filter(field => !req.body[field]);
    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
        missingFields
      });
    }

    // Create new business
    const newBusnies = new Busnies(req.body);
    await newBusnies.save();

    res.status(201).json({
      success: true,
      message: 'Business created successfully',
      data: newBusnies
    });
  } catch (error) {
    console.error('Error creating business:', error);
    
    // Handle duplicate key error
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Duplicate value error',
        field: Object.keys(error.keyPattern)[0],
        value: error.keyValue[Object.keys(error.keyPattern)[0]]
      });
    }

    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};