const express = require('express');
const router = express.Router();
const Lender = require('../models/Lender');

router.post('/logins', async (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes('@')) return res.status(400).send('Invalid email');

  const domain = email.split('@')[1].toLowerCase();
  const lender = await Lender.findOne({ domain });

  if (!lender) {
    return res.status(403).json({ success: false, message: 'Unauthorized domain' });
  }

  res.json({ success: true, message: `Welcome from ${lender.lenderName}` });
});



module.exports = router;