const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Email sending endpoint
router.post('/send-bulk-email', async (req, res) => {
  const { emails, subject, message } = req.body;
  
  try {
    // Validate input
    if (!emails || !Array.isArray(emails) || emails.length === 0) {
      return res.status(400).json({ success: false, message: 'No valid emails provided' });
    }
    
    if (!subject || !message) {
      return res.status(400).json({ success: false, message: 'Subject and message are required' });
    }
    
    // Filter valid emails
    const validEmails = emails.filter(email => 
      typeof email === 'string' && 
      email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    );
    
    if (validEmails.length === 0) {
      return res.status(400).json({ success: false, message: 'No valid email addresses found' });
    }
    
    // Send emails
    const results = await sendBulkEmail(validEmails, subject, message);
    
    res.json({ 
      success: true,
      sentCount: results.filter(r => r.success).length,
      failedCount: results.filter(r => !r.success).length,
      results
    });
    
  } catch (error) {
    console.error('Bulk email error:', error);
    res.status(500).json({ success: false, message: 'Failed to send emails' });
  }
});

// Email sending function
async function sendBulkEmail(emails, subject, message) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  
  const results = [];
  
  for (const email of emails) {
    try {
      await transporter.sendMail({
        from: `"StatusHub" <${process.env.EMAIL_USER}>`,
        to: email,
        subject,
        text: message,
        html: `<p>${message.replace(/\n/g, '<br>')}</p>`
      });
      results.push({ email, success: true });
    } catch (error) {
      results.push({ email, success: false, error: error.message });
    }
  }
  
  return results;
}

module.exports = router;