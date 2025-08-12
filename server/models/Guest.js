const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { 
    type: String, 
    required: true,
    unique: true,
    lowercase: true
  },
  mobile: { type: String, required: true, unique: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  pinCode: { type: String, required: true },
  expertise: { type: String, required: true },
  lender: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lender',
    required: true
  },
  isGuest: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Guest', guestSchema);