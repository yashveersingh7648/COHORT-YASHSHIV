// // models/Requirement.js
// const mongoose = require('mongoose');

// const requirementSchema = new mongoose.Schema({
//   companyName: { type: String, required: true },
//   companyType: { type: String, required: true },
//   product: { type: String, required: true },  
//   categoryType: { type: String, required: true },
//   companyCity: { type: String, required: true },
//   companyPincode: { type: String, required: true, match: [/^\d{6}$/, 'Please fill a valid 6-digit pincode'] },
//   companyState: { type: String, required: true },
//   teamSize: { type: Number, required: true, min: 1 },
//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('Requirement', requirementSchema);







// // models/Requirement.js
const mongoose = require('mongoose');

const requirementSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  companyType: { type: String, required: true },
  product: { type: String, required: true },
  categoryType: { type: String, required: true },
  companyCity: { type: String, required: true },
  companyPincode: { type: String, required: true, match: [/^\d{6}$/, 'Please fill a valid 6-digit pincode'] },
  companyState: { type: String, required: true },
  teamSize: { type: Number, required: true, min: 1 },

  // 👇 user ka email ya ID
  userEmail: { type: String, required: true }, 

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Requirement', requirementSchema);
