// const express = require('express');
// const router = express.Router();
// const Requirement = require('../models/Requirement');
// // const Manpower = require('../models/Manpower');

// // Post Requirement
// router.post('/requirements', async (req, res) => {
//   try {
//     const requirement = new Requirement(req.body);
//     await requirement.save();
//     res.status(201).json({ success: true, data: requirement });
//   } catch (error) {
//     res.status(400).json({ success: false, error: error.message });
//   }
// });

// // Add Manpower
// // router.post('/manpower', async (req, res) => {
// //   try {
// //     const manpower = new Manpower(req.body);
// //     await manpower.save();
// //     res.status(201).json({ success: true, data: manpower });
// //   } catch (error) {
// //     res.status(400).json({ success: false, error: error.message });
// //   }
// // });

// module.exports = router;



// routes/api.js
// const express = require('express');
// const router = express.Router();
// const Requirement = require('../models/Requirement');

// router.post('/requirements', async (req, res) => {
//   try {
//     const requirement = new Requirement(req.body);
//     await requirement.save();
//     res.status(201).json({ success: true, data: requirement });
//   } catch (error) {
//     res.status(400).json({ 
//       success: false, 
//       error: error.message,
//       errors: error.errors 
//     });
//   }
// });

// // router.get('/requirements', async (req, res) => {
// //   try {
// //     const requirements = await Requirement.find({})
// //       .select('companyName companyCity companyState companyType product categoryType teamSize companyPincode')
// //       .sort({ createdAt: -1 })
// //       .limit(10);
// //     res.json(requirements);
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // });

// router.get('/requirements', async (req, res) => {
//   try {
//     const { email } = req.query;

//     let requirements;
//     if (email) {
//       // sirf is user ka data
//       requirements = await Requirement.find({ userEmail: email });
//     } else {
//       // sabhi data (ImageSlider ke liye)
//       requirements = await Requirement.find();
//     }

//     res.json(requirements);
//   } catch (error) {
//     res.status(500).json({ error: 'Server error' });
//   }
// });



// // PUT - Update
// router.put('/requirements/:id', async (req, res) => {
//   const updated = await Requirement.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(updated);
// });

// // DELETE
// router.delete('/requirements/:id', async (req, res) => {
//   await Requirement.findByIdAndDelete(req.params.id);
//   res.json({ success: true });
// });

// module.exports = router;














const express = require('express');
const router = express.Router();
const Requirement = require('../models/Requirement');
const authenticateBusiness = require('../middleware/authenticateBusiness'); 

// POST - Create new requirement

router.post('/requirements', async (req, res) => {
  console.log('Received data:', req.body); 
  
  try {
    // 1. Validate required fields
    const requiredFields = ['companyName', 'companyType', 'product', 'categoryType'];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        console.log(`Missing required field: ${field}`);
        return res.status(400).json({ 
          success: false,
          error: `${field} is required` 
        });
      }
    }

    // 2. Add user email
    const requirementData = {
      ...req.body,
      userEmail: req.body.userEmail || 'unknown@example.com' 
    };

    console.log('Data to save:', requirementData); 

    // 3. Save to MongoDB
    const requirement = new Requirement(requirementData);
    const savedRequirement = await requirement.save();
    
    console.log('Successfully saved:', savedRequirement);
    
    res.status(201).json({
      success: true,
      data: savedRequirement
    });

  } catch (error) {
    console.error('Full error:', error); 
    
    // Specific validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors
      });
    }

    // General error
    res.status(500).json({
      success: false,
      error: 'Server error',
      message: error.message
    });
  }
});

// GET - Fetch requirements
// router.get('/requirements', authenticateBusiness, async (req, res) => {
//   try {
//     console.log('Authenticated user:', req.user);
    
//     if (!req.user || !req.user.email) {
//       return res.status(400).json({
//         success: false,
//         error: 'User information missing'
//       });
//     }

//     const { limit = 10, page = 1 } = req.query;
//     const skip = (page - 1) * limit;

//     const requirements = await Requirement.find({ userEmail: req.user.email })
//       .sort({ createdAt: -1 })
//       .skip(skip)
//       .limit(parseInt(limit));

//     const total = await Requirement.countDocuments({ userEmail: req.user.email });

//     res.json({
//       success: true,
//       data: requirements,
//       pagination: {
//         total,
//         page: parseInt(page),
//         limit: parseInt(limit),
//         pages: Math.ceil(total / limit)
//       }
//     });

//   } catch (error) {
//     console.error('Error fetching requirements:', error);
//     res.status(500).json({
//       success: false,
//       error: 'Server error',
//       message: error.message
//     });
//   }
// });



router.get('/requirements', authenticateBusiness, async (req, res) => {
  try {
    // Get email from authenticated business user
    const userEmail = req.user.email;
    
    if (!userEmail) {
      return res.status(400).json({
        success: false,
        error: 'User email not found in token'
      });
    }

    const requirements = await Requirement.find({
      $or: [
        { userEmail: userEmail },
        { companyEmail: userEmail }
      ]
    }).sort({ createdAt: -1 });

    res.json({
      success: true,
      data: requirements
    });

  } catch (error) {
    console.error('Error fetching requirements:', error);
    res.status(500).json({
      success: false,
      error: 'Server error'
    });
  }
});


// routes/requirements.js
router.get('/all-requirements', async (req, res) => {
  try {
    const requirements = await Requirement.find({})
      .sort({ createdAt: -1 }); // Sort by newest first

    res.json({
      success: true,
      data: requirements,
      total: requirements.length
    });
  } catch (error) {
    console.error('Error fetching all requirements:', error);
    res.status(500).json({
      success: false,
      error: 'Server error',
      message: error.message
    });
  }
});



// PUT - Update requirement
router.put('/requirements/:id', authenticateBusiness, async (req, res) => {
  try {
    // First find the requirement to check ownership
    const requirement = await Requirement.findById(req.params.id);
    
    if (!requirement) {
      return res.status(404).json({
        success: false,
        error: 'Requirement not found'
      });
    }

    // Check if the user owns this requirement
    if (requirement.userEmail !== req.user.email) {
      return res.status(403).json({
        success: false,
        error: 'Unauthorized to update this requirement'
      });
    }

    // Validate updates
    if (req.body.companyPincode && !/^\d{6}$/.test(req.body.companyPincode)) {
      return res.status(400).json({
        success: false,
        error: 'Pincode must be 6 digits'
      });
    }

    if (req.body.teamSize && (isNaN(req.body.teamSize)) || req.body.teamSize < 1) {
      return res.status(400).json({
        success: false,
        error: 'Team size must be a number greater than 0'
      });
    }

    const updated = await Requirement.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      data: updated,
      message: 'Requirement updated successfully'
    });

  } catch (error) {
    console.error('Error updating requirement:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Server error',
      message: error.message 
    });
  }
});

// DELETE - Remove requirement
router.delete('/requirements/:id', authenticateBusiness, async (req, res) => {
  try {
    const requirement = await Requirement.findById(req.params.id);
    
    // Check ownership (if requirements are user-specific)
    if (requirement.userEmail !== req.user.email) {
      return res.status(403).json({ 
        success: false,
        error: 'Unauthorized to delete this requirement' 
      });
    }

    await Requirement.findByIdAndDelete(req.params.id);
    res.json({ success: true });
    
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ 
      success: false,
      error: 'Server error' 
    });
  }
});

module.exports = router;