// const mongoose = require('mongoose');

// const OTPSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true
//   },
//   otp: {
//     type: String,
//     required: true
//   },
//   expiresAt: {
//     type: Date,
//     required: true,
//     index: { expires: '15m' } 
//   }
// }, {
//   timestamps: true
// });

// module.exports = mongoose.model('OTP', OTPSchema);





// 15-07-15
const mongoose = require('mongoose');

const OTPSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true,
    lowercase: true,
    index: true 
  },
  otp: { 
    type: String, 
    required: true 
  },
  expiresAt: { 
    type: Date, 
    required: true,
    index: { expires: '1m' } // Auto-delete 1 minute after expiry
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('OTP', OTPSchema);