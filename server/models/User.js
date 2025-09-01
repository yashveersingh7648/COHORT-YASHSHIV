// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String,
//   agencyId: { 
//     type: mongoose.Schema.Types.ObjectId, 
//     ref: 'Agency' 
//   },
//   role: { 
//     type: String, 
//     enum: ['admin', 'agency_admin', 'user'], 
//     default: 'user' 
//   }
// }, { timestamps: true });

// module.exports = mongoose.model('User', userSchema);




// 12-07-25
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     lowercase: true,
//     trim: true
//   },
//   password: {
//     type: String,
//     select: false
//   },
//   googleId: {
//     type: String,
//     unique: true,
//     sparse: true
//   },
//   isGoogleAuth: {
//     type: Boolean,
//     default: false
//   },
//   profileImage: {
//     type: String
//   }
// }, { timestamps: true });

// module.exports = mongoose.model('User', userSchema);










// 23-08-25
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: {
  type: String,
  required: function () {
    return this.userType === 'lender'; 
  }
},
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: { type: String, select: false },
  googleId: { type: String, unique: true, sparse: true },
  isGoogleAuth: { type: Boolean, default: false },
  profileImage: { type: String },
  userType: {
    type: String,
    enum: ['lender', 'guest', 'agency', 'admin'],
    default: 'guest'
  },
  lender: {
    type: String,
    required: function () { return this.userType === 'lender'; }
  },
   draCertified: { type: String, enum: ['Yes','No'] },
  isAdmin: { type: Boolean, default: false },
  isGuest: { type: Boolean, default: false },
  isVerified: { type: Boolean, default: false },
  otp: {
    code: String,
    expiresAt: Date
  },
  lastLogin: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
