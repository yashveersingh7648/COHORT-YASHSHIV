// routes/lenders.js
const express = require('express');
const router = express.Router();
const Lender = require('../models/Lender');

// GET lenders with search
// router.get('/lenders', async (req, res) => {
//   try {
//     const searchQuery = req.query.search || "";

//     const lenders = await Lender.find({
//       lenderName: { $regex: searchQuery, $options: 'i' }
//     });

//     res.status(200).json(lenders);
//   } catch (err) {
//     console.error("Error fetching lenders:", err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
router.get('/', async (req, res) => {
  try {
    const searchQuery = req.query.search || "";
    
    const lenders = await Lender.find({
      lenderName: { $regex: searchQuery, $options: 'i' }
    });

    res.status(200).json({
      success: true,
      data: lenders
    });
    
  } catch (err) {
    console.error("Error fetching lenders:", err);
    res.status(500).json({ 
      success: false,
      error: 'Internal Server Error' 
    });
  }
});

module.exports = router;
