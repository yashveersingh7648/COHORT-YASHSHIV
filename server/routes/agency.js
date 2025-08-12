// const express = require('express');
// const router = express.Router();
// const authenticate = require('../middleware/authenticateAgency');
// const Agency = require('../models/AgencyModel');

// // Get logged-in agency profile
// router.get('/profile', authenticate, async (req, res) => {
//   try {
//     // Find agency by userEmail (from authenticated user)
//     const agency = await Agency.findOne({ userEmail: req.user.email });
    
//     if (!agency) {
//       return res.status(404).json({
//         success: false,
//         message: 'Agency not found'
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: 'Agency profile fetched successfully',
//       data: agency
//     });

//   } catch (err) {
//     console.error('Error fetching agency:', err);
//     res.status(500).json({
//       success: false,
//       message: 'Server error while fetching agency profile'
//     });
//   }
// });

// module.exports = router;



// routes/agency.js
// const express = require('express');
// const router = express.Router();
// const Agency = require('../models/AgencyModel');

// // GET company by email
// router.get('/dashboard/by-email/:email', async (req, res) => {
//   try {
//     alert('hello')
//     console.log("Params received in backend:", req.params.email); 
//     const Agency  = await Agency findOne({ email: req.params.email });
//     if (!Agency ) return res.status(404).send("Company not found");
//     res.json(Agency );
//   } catch (err) {
//     console.error("Error fetching agency:", err);
//     res.status(500).send("Internal Server Error");
//   }
// });

// module.exports = router;

















// const express = require("express");
// const multer = require("multer");
// const path = require("path");
// const Agency = require('../models/AgencyModel');
// const authenticateAgency = require(path.join(__dirname, '../middleware/authenticateAgency'));
// const router = express.Router();

// // Storage for multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "uploads/"),
//   filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
// });
// const upload = multer({ storage });

// // router.get("/dashboard/by-email/:email", async (req, res) => {
// //   try {
// //     const agency = await Agency.findOne({ userEmail: req.params.email });
// //     if (!agency) return res.status(404).json({ message: "Not found" });
// //     res.json({ data: agency });
// //   } catch (err) {
// //     res.status(500).json({ message: err.message });
// //   }
// // });

// // POST /api/agency/dashboard/by-email
// router.post("/dashboard/by-email", async (req, res) => {
//   const { email } = req.body;

//   if (!email) {
//     return res.status(400).json({ message: "Email is required" });
//   }

//   try {
//     const agency = await Agency.findOne({ userEmail: email });

//     if (!agency) {
//       return res.status(404).json({ message: "Agency not found" });
//     }

//     res.status(200).json({ success: true, data: agency });
//   } catch (err) {
//     console.error("Error fetching agency:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });


// // PUT with file upload handling
// // Agency model se data get karne ka route (edit page ke liye)
// router.get("/edit", authenticateAgency, async (req, res) => {
//   try {
//     const email = req.user.email;
//     const agency = await Agency.findOne({ userEmail: email });
    
//     if (!agency) {
//       return res.status(404).json({ message: "Agency not found" });
//     }
    
//     res.status(200).json({ success: true, data: agency });
//   } catch (err) {
//     console.error("Error fetching agency for edit:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Agency data update karne ka route
// router.get("/edit", authenticateAgency, async (req, res) => {        
//   try {
//     const email = req.user.email;
//     const agency = await Agency.findOne({ userEmail: email });
    
//     if (!agency) {
//       return res.status(404).json({ message: "Agency not found" });
//     }
    
//     res.status(200).json({ success: true, data: agency });
//   } catch (err) {
//     console.error("Error fetching agency for edit:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Update agency data
// router.put("/update", authenticateAgency, upload.fields([
//   { name: 'companyLogo', maxCount: 1 },
//   { name: 'companyBanner', maxCount: 1 },
//   { name: 'profilePdf', maxCount: 1 }
// ]), async (req, res) => {
//   try {
//     const email = req.user.email;
//     const updates = req.body;
//     const files = req.files;

//     // File paths handle karna
//     if (files.companyLogo) {
//       updates.companyLogo = files.companyLogo[0].filename;
//     }
//     if (files.companyBanner) {
//       updates.companyBanner = files.companyBanner[0].filename;
//     }
//     if (files.profilePdf) {
//       updates.profilePdf = files.profilePdf[0].filename;
//     }

//     const updatedAgency = await Agency.findOneAndUpdate(
//       { userEmail: email },
//       { $set: updates },
//       { new: true }
//     );

//     if (!updatedAgency) {
//       return res.status(404).json({ message: "Agency not found" });
//     }

//     res.status(200).json({ 
//       success: true, 
//       message: "Profile updated successfully",
//       data: updatedAgency
//     });
//   } catch (err) {
//     console.error("Error updating agency:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// router.delete("/", authenticateAgency, async (req, res) => {
//   try {
//     const email = req.user.email;
    
//     // 1. Delete agency from database
//     const deletedAgency = await Agency.findOneAndDelete({ userEmail: email });
    
//     if (!deletedAgency) {
//       return res.status(404).json({ message: "Agency not found" });
//     }
    
//     // 2. Optional: Delete associated files from uploads folder
//     const fs = require('fs');
//     const path = require('path');
    
//     const deleteFileIfExists = (filename) => {
//       if (filename) {
//         const filePath = path.join(__dirname, '../uploads', filename);
//         if (fs.existsSync(filePath)) {
//           fs.unlinkSync(filePath);
//         }
//       }
//     };
    
//     deleteFileIfExists(deletedAgency.companyLogo);
//     deleteFileIfExists(deletedAgency.companyBanner);
//     deleteFileIfExists(deletedAgency.profilePdf);
    
//     // 3. Respond with success
//     res.status(200).json({ 
//       success: true,
//       message: "Agency profile deleted successfully"
//     });
    
//   } catch (err) {
//     console.error("Delete error:", err);
//     res.status(500).json({ 
//       message: "Failed to delete agency profile",
//       error: err.message 
//     });
//   }
// });

// router.get('/', async (req, res) => {
//   try {
//     const agencies = await Agency.find({})
//       .select('+userEmail +companyEmail') // Force include email fields
//       .lean();
    
//     res.status(200).json({ 
//       success: true,
//       data: agencies,
//       count: agencies.length
//     });
//   } catch (err) {
//     console.error("Error fetching agencies:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;








// 07-08-25
const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Agency = require('../models/AgencyModel');
const authenticateAgency = require(path.join(__dirname, '../middleware/authenticateAgency'));
const router = express.Router();

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Create uploads directory if it doesn't exist
    const uploadPath = path.join(__dirname, '../uploads');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB file size limit
  }
});

// Helper function to delete files
const deleteFile = (filename) => {
  if (!filename) return;
  const filePath = path.join(__dirname, '../uploads', filename);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
};

// Get agency by email (public endpoint)
router.post("/dashboard/by-email", async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ 
        success: false,
        message: "Email is required" 
      });
    }

    const agency = await Agency.findOne({ userEmail: email })
      .select('-__v -createdAt -updatedAt') // Exclude unnecessary fields
      .lean();

    if (!agency) {
      return res.status(404).json({ 
        success: false,
        message: "Agency not found" 
      });
    }

    // Add file URLs if they exist
    if (agency.companyLogo) {
      agency.logoUrl = `${req.protocol}://${req.get('host')}/uploads/${agency.companyLogo}`;
    }
    if (agency.companyBanner) {
      agency.bannerUrl = `${req.protocol}://${req.get('host')}/uploads/${agency.companyBanner}`;
    }
    if (agency.profilePdf) {
      agency.pdfUrl = `${req.protocol}://${req.get('host')}/uploads/${agency.profilePdf}`;
    }

    res.status(200).json({ 
      success: true, 
      data: agency 
    });
  } catch (err) {
    console.error("Error fetching agency:", err);
    res.status(500).json({ 
      success: false,
      message: "Internal server error" 
    });
  }
});

// Get agency data for edit (authenticated)
router.get("/edit", authenticateAgency, async (req, res) => {
  try {
    const agency = await Agency.findOne({ userEmail: req.user.email })
      .select('-__v -createdAt -updatedAt')
      .lean();

    if (!agency) {
      return res.status(404).json({ 
        success: false,
        message: "Agency not found" 
      });
    }

    res.status(200).json({ 
      success: true, 
      data: agency 
    });
  } catch (err) {
    console.error("Error fetching agency for edit:", err);
    res.status(500).json({ 
      success: false,
      message: "Internal server error" 
    });
  }
});

// Update agency data (authenticated)
router.put("/update", authenticateAgency, upload.fields([
  { name: 'companyLogo', maxCount: 1 },
  { name: 'companyBanner', maxCount: 1 },
  { name: 'profilePdf', maxCount: 1 }
]), async (req, res) => {
  try {
    const email = req.user.email;
    const updates = req.body;
    const files = req.files;

    // Get current agency data to handle file deletions
    const currentAgency = await Agency.findOne({ userEmail: email });
    if (!currentAgency) {
      return res.status(404).json({ 
        success: false,
        message: "Agency not found" 
      });
    }

    // Handle file uploads and deletions
    if (files.companyLogo) {
      // Delete old logo if it exists
      if (currentAgency.companyLogo) {
        deleteFile(currentAgency.companyLogo);
      }
      updates.companyLogo = files.companyLogo[0].filename;
    }

    if (files.companyBanner) {
      // Delete old banner if it exists
      if (currentAgency.companyBanner) {
        deleteFile(currentAgency.companyBanner);
      }
      updates.companyBanner = files.companyBanner[0].filename;
    }

    if (files.profilePdf) {
      // Delete old PDF if it exists
      if (currentAgency.profilePdf) {
        deleteFile(currentAgency.profilePdf);
      }
      updates.profilePdf = files.profilePdf[0].filename;
    }

    // Update agency data
    const updatedAgency = await Agency.findOneAndUpdate(
      { userEmail: email },
      { $set: updates },
      { new: true, runValidators: true }
    ).select('-__v -createdAt -updatedAt');

    if (!updatedAgency) {
      return res.status(404).json({ 
        success: false,
        message: "Failed to update agency" 
      });
    }

    res.status(200).json({ 
      success: true, 
      message: "Profile updated successfully",
      data: updatedAgency
    });
  } catch (err) {
    console.error("Error updating agency:", err);
    res.status(500).json({ 
      success: false,
      message: "Internal server error" 
    });
  }
});

// Delete agency (authenticated)
router.delete("/", authenticateAgency, async (req, res) => {
  try {
    const email = req.user.email;
    
    const deletedAgency = await Agency.findOneAndDelete({ userEmail: email });
    
    if (!deletedAgency) {
      return res.status(404).json({ 
        success: false,
        message: "Agency not found" 
      });
    }
    
    // Delete associated files
    deleteFile(deletedAgency.companyLogo);
    deleteFile(deletedAgency.companyBanner);
    deleteFile(deletedAgency.profilePdf);
    
    res.status(200).json({ 
      success: true,
      message: "Agency profile deleted successfully"
    });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ 
      success: false,
      message: "Failed to delete agency profile"
    });
  }
});

// Get all agencies (public endpoint with optional filters)
router.get('/', async (req, res) => {
  try {
    // You can add query filters here if needed
    const agencies = await Agency.find({})
      .select('userEmail companyName companyPhone companyCity companyState categoryType')
      .lean();

    res.status(200).json({ 
      success: true,
      data: agencies,
      count: agencies.length
    });
  } catch (err) {
    console.error("Error fetching agencies:", err);
    res.status(500).json({ 
      success: false,
      message: "Internal server error" 
    });
  }
});

module.exports = router;