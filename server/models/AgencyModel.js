const mongoose = require('mongoose');

const AgencySchema = new mongoose.Schema({
  userEmail: { type: String, unique: true, required: true },
  companyName: String,
  companyPhone: String,
  companyCity: String,
  companyState: String,
  companyPincode: String,
  contactName: String,
  categoryType: String,
  totalManpower: Number,
  companyLogo: String,
  companyBanner: String,
  profilePdf: String,
   createdAt: { 
    type: Date, 
    default: Date.now 
  }
}, { timestamps: true, collection: 'companies' });

module.exports = mongoose.model('Agency', AgencySchema);
