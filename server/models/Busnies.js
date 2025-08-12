// const mongoose = require('mongoose');

// const busniesSchema = new mongoose.Schema({
//   companyName: { type: String, required: true },
//   companyType: { type: String, required: true },
//   contactName: { type: String, required: true },
//   designation: { type: String, required: true },
//   productsHandling: { type: String, required: true },
//   companyCity: { type: String, required: true },
//   companyPincode: { type: String, required: true },
//   companyState: { type: String, required: true },
//   companyEmail: { 
//     type: String, 
//     required: true,
//     unique: true,
//     match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
//   },
//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('Busnies', busniesSchema);









// 19-07-25
const mongoose = require('mongoose');

const busniesSchema = new mongoose.Schema({
  companyName: { 
    type: String, 
    required: [true, 'Company Name is required'],
    trim: true
  },
  companyType: { 
    type: String, 
    required: [true, 'Company Type is required'],
    enum: ['Private Limited', 'Public Limited', 'LLP', 'Partnership', 'Proprietorship', 'Other']
  },
  contactName: { 
    type: String, 
    required: [true, 'Contact Name is required'],
    trim: true
  },
  designation: { 
    type: String, 
    required: [true, 'Designation is required'],
    trim: true
  },
  productsHandling: { 
    type: String, 
    required: [true, 'Products Handling is required'],
    enum: ['PL/BL', 'Credit Card', 'STPL', 'CD', 'HL/LAP', 'Auto Loan', 'Two Wheeler', 'CV/CE', 'Gold Loan']
  },
  companyCity: { 
    type: String, 
    required: [true, 'City is required'],
    trim: true
  },
  companyPincode: { 
    type: String, 
    required: [true, 'Pincode is required'],
    match: [/^\d{6}$/, 'Please provide a valid 6-digit pincode']
  },
  companyState: { 
    type: String, 
    required: [true, 'State is required'],
    enum: ['Andhra Pradesh', 'Delhi', 'Gujarat', 'Karnataka', 'Maharashtra', 'Tamil Nadu', 'Uttar Pradesh', 'West Bengal']
  },
 companyEmail: {
    type: String,
    required: [true, 'Business Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  userId: {
    type: mongoose.Schema.Types.Mixed, // Can be ObjectId or null
    required: false,
    default: null
  },
  userEmail: {
    type: String,
    required: [true, 'User email is required'],
    trim: true,
    lowercase: true,
    default: ""
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Busnies', busniesSchema);