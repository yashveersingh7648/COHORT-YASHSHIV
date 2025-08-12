// const jwt = require('jsonwebtoken');

// const authenticateAgency = (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1];
  
//   if (!token) return res.status(401).json({ message: 'Authentication required' });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // Attach user data to request
//     next();
//   } catch (error) {
//     res.status(403).json({ message: 'Invalid token' });
//   }
// };

// module.exports = authenticateAgency;







// 12-07-25
// authenticateAgency.js
// const jwt = require('jsonwebtoken');
// const config = require('../config');

// module.exports = function(req, res, next) {
//   const token = req.header('Authorization')?.replace('Bearer ', '');
  
//   if (!token) {
//     return res.status(401).json({ msg: 'No token provided' });
//   }

//   try {
//     const decoded = jwt.verify(token, config.jwtSecret);
//     req.user = decoded.user;
//     next();
//   } catch (err) {
//     console.error('Token verification error:', err);
//     return res.status(401).json({ msg: 'Invalid token' });
//   }
// };



// middleware/authenticateAgency.js
// const jwt = require('jsonwebtoken');

// module.exports = (req, res, next) => {
//   const auth = req.headers.authorization;
//   if (!auth?.startsWith('Bearer ')) {
//     return res.status(401).json({ message: 'No token provided' });
//   }
//   const token = auth.split(' ')[1];
//   try {
//     req.user = jwt.verify(token, process.env.JWT_SECRET);
//     next();
//   } catch {
//     res.status(401).json({ message: 'Invalid or expired token' });
//   }
// };





// 07-08-25
const jwt = require('jsonwebtoken');
const Agency = require('../models/AgencyModel'); // Import your Agency model

module.exports = async (req, res, next) => {
  try {
    // Check for token in Authorization header first
    let token;
    if (req.headers.authorization?.startsWith('Bearer ')) {
      token = req.headers.authorization.split(' ')[1];
    }
    // Fallback to check for email header (for Google auth users)
    else if (req.headers['x-user-email']) {
      const email = req.headers['x-user-email'];
      // Find agency by email and verify
      const agency = await Agency.findOne({ userEmail: email });
      if (!agency) {
        return res.status(401).json({ message: 'No agency found with this email' });
      }
      req.user = { email };
      return next();
    }
    // If no token or email provided
    else {
      return res.status(401).json({ message: 'No authentication token or email provided' });
    }

    // Verify JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Additional verification - check if user exists in database
    const agency = await Agency.findOne({ userEmail: decoded.email });
    if (!agency) {
      return res.status(401).json({ message: 'Agency not found' });
    }

    req.user = decoded;
    next();
  } catch (err) {
    console.error('Authentication error:', err);
    
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired' });
    }
    if (err.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Invalid token' });
    }
    
    res.status(401).json({ message: 'Authentication failed' });
  }
};