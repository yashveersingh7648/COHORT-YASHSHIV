// manpowerModel.js
const mongoose = require('mongoose');

const manpowerSchema = new mongoose.Schema({
  designation: {
    type: String,
    required: [true, 'Designation is required'],
    trim: true
  },
  noOfPositions: {
    type: Number,
    required: [true, 'Number of positions is required'],
    min: [1, 'Must have at least 1 position']
  },
  experience: {
    type: String,
    required: [true, 'Experience is required'],
    enum: ['0-1 years', '1-3 years', '3-5 years', '5+ years']
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true
  },
  userEmail: {
    type: String,
    required: [true, 'User email is required'],
    match: [/\S+@\S+\.\S+/, 'is invalid']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Manpower', manpowerSchema);