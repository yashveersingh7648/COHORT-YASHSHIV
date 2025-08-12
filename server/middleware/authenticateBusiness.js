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
// authenticateBusiness.js - Improved Version
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  // 1. Check token from multiple sources
  const token = req.header('x-auth-token') || 
                req.header('Authorization')?.replace('Bearer ', '') || 
                req.cookies?.token || 
                req.query?.token;

  if (!token) {
    return res.status(401).json({ 
      success: false,
      error: 'Authentication token missing' 
    });
  }

  try {
    // 2. Verify token with your secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // 3. Attach complete user data to request
    req.user = {
      _id: decoded._id,
      email: decoded.email,
      isAdmin: decoded.isAdmin || false,
      businessId: decoded.businessId // Add if needed
    };
    
    next();
  } catch (error) {
    console.error('Token verification failed:', error);
    res.status(401).json({ 
      success: false,
      error: 'Invalid or expired token',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};