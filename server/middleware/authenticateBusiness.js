// // authenticateBusiness.js
// const jwt = require('jsonwebtoken');

// module.exports = function(req, res, next) {
//   const token = req.header('x-auth-token') || 
//                 req.header('Authorization')?.replace('Bearer ', '') || 
//                 req.query.token;

//   if (!token) {
//     return res.status(401).json({ 
//       success: false,
//       error: 'Authentication token missing' 
//     });
//   }

//   try {
//     if (token.startsWith('eyJhbGciOiJSUzI1Ni')) { 
//       return res.status(401).json({
//         success: false,
//         error: 'Invalid token type - please use system token'
//       });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
//     req.user = {
//       email: decoded.email, 
//       isAdmin: decoded.isAdmin || false
//     };
    
//     next();
//   } catch (error) {
//     console.error('Token verification failed:', error);
//     res.status(401).json({ 
//       success: false,
//       error: 'Invalid or expired token' 
//     });
//   }
// };









// 31-07-25
// authenticateBusiness.js - Fixed Version
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Adjust path as needed

module.exports = async function(req, res, next) {
  // 1. Check token from multiple sources
  let token = req.header('x-auth-token') || 
              req.header('Authorization')?.replace('Bearer ', '') || 
              req.cookies?.token || 
              req.query?.token;

  // Also check body for token
  if (!token && req.body && req.body.token) {
    token = req.body.token;
  }

  if (!token) {
    console.log('No token found in request');
    return res.status(401).json({ 
      success: false,
      error: 'Authentication token missing. Please login again.' 
    });
  }

  try {
    // 2. Verify token with your secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret_for_development');
    
    // 3. Debug logging
    console.log('Decoded token:', decoded);
    
    // 4. Attach user data to request
    req.user = {
      _id: decoded._id || decoded.id,
      email: decoded.email,
      isAdmin: decoded.isAdmin || false,
      businessId: decoded.businessId,
    };
    
    // 5. If email is missing from token, fetch from database
    if (!req.user.email) {
      console.log('Email missing in token, fetching from database...');
      try {
        const user = await User.findById(req.user._id).select('email');
        if (user && user.email) {
          req.user.email = user.email;
          console.log('Email fetched from database:', user.email);
        } else {
          console.log('Could not find user email in database');
          return res.status(401).json({
            success: false,
            error: 'User email not found. Please login again.'
          });
        }
      } catch (dbError) {
        console.error('Database error fetching user email:', dbError);
        return res.status(500).json({
          success: false,
          error: 'Server error during authentication'
        });
      }
    }
    
    console.log('Authenticated user:', req.user);
    next();
  } catch (error) {
    console.error('Token verification failed:', error.message);
    
    // Specific error handling
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ 
        success: false,
        error: 'Token expired. Please login again.' 
      });
    }
    
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ 
        success: false,
        error: 'Invalid token. Please login again.' 
      });
    }
    
    res.status(401).json({ 
      success: false,
      error: 'Authentication failed',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};