// const express = require('express');
// const router = express.Router();
// const Manpower = require('../models/Manpower');
// const authenticateBusiness = require('../middleware/authenticateBusiness');

// // POST endpoint - Create new manpower position
// router.post('/', authenticateBusiness, async (req, res) => {
//   try {
//     const { designation, noOfPositions, experience, location } = req.body;
    
//     const manpower = new Manpower({
//       designation,
//       noOfPositions,
//       experience,
//       location,
//       userEmail: req.user.email
//     });

//     await manpower.save();
//     res.status(201).json({ 
//       success: true,
//       data: manpower
//     });
//   } catch (err) {
//     res.status(400).json({ 
//       success: false,
//       error: err.message 
//     });
//   }
// });

// // GET endpoint - Get all manpower positions
// router.get('/', async (req, res) => { // Changed from '/api/manpower' to '/'
//   try {
//     const manpower = await Manpower.find();
//     res.json({ 
//       success: true, 
//       data: manpower 
//     });
//   } catch (err) {
//     res.status(500).json({ 
//       success: false, 
//       error: err.message 
//     });
//   }
// });

// module.exports = router;





// 05-08-25
const express = require('express');
const router = express.Router();
const Manpower = require('../models/Manpower');
const authenticateBusiness = require('../middleware/authenticateBusiness');

// POST - Create new manpower position
router.post('/', authenticateBusiness, async (req, res) => {
  try {
    const { designation, noOfPositions, experience, location } = req.body;
    
    // Validate required fields
    if (!designation || !noOfPositions || !experience || !location) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required'
      });
    }

    const manpower = new Manpower({
      designation,
      noOfPositions: parseInt(noOfPositions),
      experience,
      location,
      userEmail: req.user.email, // Associate with logged-in user
      status: 'Active'
    });

    await manpower.save();
    
    res.status(201).json({ 
      success: true,
      data: manpower
    });
  } catch (err) {
    res.status(400).json({ 
      success: false,
      error: err.message 
    });
  }
});

// GET - Get manpower positions for logged-in business user
router.get('/', authenticateBusiness, async (req, res) => {
  try {
    const positions = await Manpower.find({ userEmail: req.user.email })
      .sort({ createdAt: -1 }); // Newest first

    res.json({ 
      success: true, 
      data: positions 
    });
  } catch (err) {
    res.status(500).json({ 
      success: false, 
      error: err.message 
    });
  }
});

// PUT - Update manpower position
router.put('/:id', authenticateBusiness, async (req, res) => {
  try {
    const position = await Manpower.findOne({
      _id: req.params.id,
      userEmail: req.user.email // Ensure user owns this position
    });

    if (!position) {
      return res.status(404).json({
        success: false,
        error: 'Position not found or unauthorized'
      });
    }

    const updated = await Manpower.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      data: updated
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
});

// DELETE - Remove manpower position
router.delete('/:id', authenticateBusiness, async (req, res) => {
  try {
    const position = await Manpower.findOneAndDelete({
      _id: req.params.id,
      userEmail: req.user.email // Ensure user owns this position
    });

    if (!position) {
      return res.status(404).json({
        success: false,
        error: 'Position not found or unauthorized'
      });
    }

    res.json({
      success: true,
      message: 'Position deleted successfully'
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});




// Add this route to get all manpower records
router.get('/all-records', async (req, res) => {
  try {
    const records = await Manpower.find({})
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: records,
      total: records.length,
      message: `Found ${records.length} manpower records`
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error',
      message: error.message
    });
  }
});

// Keep all your existing routes below this
// routes/manpower.js mein naya route add karein
router.get('/all', async (req, res) => {
  try {
    const positions = await Manpower.find()
      .sort({ createdAt: -1 })
      .limit(50);
    res.json({ success: true, data: positions });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;