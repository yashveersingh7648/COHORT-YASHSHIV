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
// const express = require('express');
// const router = express.Router();
// const Manpower = require('../models/Manpower');
// const authenticateBusiness = require('../middleware/authenticateBusiness');

// // POST - Create new manpower position
// // manpower.js mein temporarily middleware modify karo
// router.post('/', async (req, res) => {
//   try {
//     console.log('✅ Bypassing auth for testing');
    
//     const { designation, noOfPositions, experience, location, userEmail } = req.body;
    
//     if (!designation || !noOfPositions || !experience || !location) {
//       return res.status(400).json({
//         success: false,
//         error: 'All fields are required'
//       });
//     }

//     const manpower = new Manpower({
//       designation,
//       noOfPositions: parseInt(noOfPositions),
//       experience,
//       location,
//       userEmail: userEmail || 'test@example.com',
//       status: 'Active'
//     });

//     await manpower.save();
    
//     res.status(201).json({ 
//       success: true,
//       data: manpower,
//       message: 'Created successfully (auth bypassed)'
//     });
//   } catch (err) {
//     console.error('Manpower creation error:', err);
//     res.status(400).json({ 
//       success: false,
//       error: err.message 
//     });
//   }
// });
// // GET - Get manpower positions for logged-in business user
// // routes/manpower.js
// router.get('/', authenticateBusiness, async (req, res) => {
//   try {
//     console.log("Authenticated user email:", req.user.email); // Debug log
    
//     // Temporary: Dono emails ke liye data return karo
//     const positions = await Manpower.find({
//       $or: [
//         { userEmail: req.user.email },
//         { userEmail: "info@ciaphershieldtefch.com" }
//       ]
//     }).sort({ createdAt: -1 });

//     res.json({ success: true, data: positions });
//   } catch (err) {
//     res.status(500).json({ success: false, error: err.message });
//   }
// });

// // PUT - Update manpower position
// // routes/manpower.js
// router.put('/:id', async (req, res) => { // Temporarily remove authenticateBusiness
//   try {
//     console.log("PUT request received for ID:", req.params.id);
//     console.log("Request body:", req.body);
    
//     // Direct update without auth check
//     const updated = await Manpower.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true, runValidators: true }
//     );

//     if (!updated) {
//       return res.status(404).json({
//         success: false,
//         error: 'Position not found'
//       });
//     }

//     res.json({
//       success: true,
//       data: updated
//     });
//   } catch (err) {
//     console.error("Update error:", err);
//     res.status(400).json({
//       success: false,
//       error: err.message
//     });
//   }
// });

// // DELETE - Remove manpower position
// // routes/manpower.js
// router.delete('/:id', async (req, res) => { // Temporarily remove authenticateBusiness
//   try {
//     console.log("DELETE request received for ID:", req.params.id);
    
//     const deleted = await Manpower.findByIdAndDelete(req.params.id);
    
//     if (!deleted) {
//       return res.status(404).json({
//         success: false,
//         error: 'Position not found'
//       });
//     }

//     res.json({
//       success: true,
//       message: 'Position deleted successfully',
//       data: deleted
//     });
//   } catch (err) {
//     console.error("Delete error:", err);
//     res.status(500).json({
//       success: false,
//       error: err.message
//     });
//   }
// });



// // Add this route to get all manpower records
// router.get('/all-records', async (req, res) => {
//   try {
//     const records = await Manpower.find({})
//       .sort({ createdAt: -1 });

//     res.json({
//       success: true,
//       data: records,
//       total: records.length,
//       message: `Found ${records.length} manpower records`
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: 'Server error',
//       message: error.message
//     });
//   }
// });

// // Keep all your existing routes below this
// // routes/manpower.js mein naya route add karein
// router.get('/all', async (req, res) => {
//   try {
//     const positions = await Manpower.find()
//       .sort({ createdAt: -1 })
//       .limit(50);
//     res.json({ success: true, data: positions });
//   } catch (err) {
//     res.status(500).json({ success: false, error: err.message });
//   }
// });

// module.exports = router;


















const express = require('express');
const router = express.Router();
const Manpower = require('../models/Manpower');
const authenticateBusiness = require('../middleware/authenticateBusiness');

// POST - Create new manpower position (WITH AUTH)
router.post('/', authenticateBusiness, async (req, res) => {
  try {
    const { designation, noOfPositions, experience, location } = req.body;
    
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
      userEmail: req.user.email, // Use authenticated user's email
      status: 'Active'
    });

    await manpower.save();
    
    res.status(201).json({ 
      success: true,
      data: manpower,
      message: 'Position created successfully'
    });
  } catch (err) {
    console.error('Manpower creation error:', err);
    res.status(400).json({ 
      success: false,
      error: err.message 
    });
  }
});

// GET - Get manpower positions for logged-in business user (WITH AUTH)
router.get('/', authenticateBusiness, async (req, res) => {
  try {
    console.log("Authenticated user email:", req.user.email);
    
    // ONLY return data for the logged-in user
    const positions = await Manpower.find({
      userEmail: req.user.email // Use only the authenticated user's email
    }).sort({ createdAt: -1 });

    res.json({ success: true, data: positions });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// PUT - Update manpower position (WITH AUTH)
router.put('/:id', authenticateBusiness, async (req, res) => {
  try {
    console.log("PUT request received for ID:", req.params.id);
    
    // First check if the position belongs to the authenticated user
    const position = await Manpower.findById(req.params.id);
    
    if (!position) {
      return res.status(404).json({
        success: false,
        error: 'Position not found'
      });
    }
    
    if (position.userEmail !== req.user.email) {
      return res.status(403).json({
        success: false,
        error: 'Unauthorized to update this position'
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
    console.error("Update error:", err);
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
});

// DELETE - Remove manpower position (WITH AUTH)
router.delete('/:id', authenticateBusiness, async (req, res) => {
  try {
    console.log("DELETE request received for ID:", req.params.id);
    
    // First check if the position belongs to the authenticated user
    const position = await Manpower.findById(req.params.id);
    
    if (!position) {
      return res.status(404).json({
        success: false,
        error: 'Position not found'
      });
    }
    
    if (position.userEmail !== req.user.email) {
      return res.status(403).json({
        success: false,
        error: 'Unauthorized to delete this position'
      });
    }

    const deleted = await Manpower.findByIdAndDelete(req.params.id);
    
    res.json({
      success: true,
      message: 'Position deleted successfully',
      data: deleted
    });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

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

// // routes/manpower.js mein naya route add karein
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
// Keep other routes as needed
module.exports = router;