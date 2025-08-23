// // models/Lender.js
// const mongoose = require('mongoose');

// const lenderSchema = new mongoose.Schema({
//   lenderName: { type: String, required: true },
//   domain: { type: String, required: true }
// });

// module.exports = mongoose.model('Lender', lenderSchema);




// 28-07-25
// const mongoose = require('mongoose');

// const lenderSchema = new mongoose.Schema({
//   lenderName: { 
//     type: String, 
//     required: true,
//     unique: true
//   },
//   domain: { 
//     type: String, 
//     required: true,
//     validate: {
//       validator: function(v) {
//         return v === "other" || /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
//       },
//       message: props => `${props.value} is not a valid domain!`
//     }
//   },
//   isDefault: { type: Boolean, default: false }
// }, { timestamps: true });

// // Ensure "Other" lender exists on startup
// lenderSchema.statics.initialize = async function() {
//   const otherLender = await this.findOneAndUpdate(
//     { lenderName: "Other" },
//     { 
//       lenderName: "Other", 
//       domain: "other",
//       isDefault: true 
//     },
//     { upsert: true, new: true }
//   );
//   return otherLender;
// };

// module.exports = mongoose.model('Lender', lenderSchema);








// 23-08-25
const mongoose = require('mongoose');

const lenderSchema = new mongoose.Schema({
  lenderName: { 
    type: String, 
    required: true,
    unique: true
  },
  domain: { 
    type: String, 
    required: true,
    validate: {
      validator: function(v) {
        return v === "other" || /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
      },
      message: props => `${props.value} is not a valid domain!`
    }
  },
  isDefault: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

// Ensure "Other" lender exists on startup
lenderSchema.statics.initialize = async function() {
  await this.findOneAndUpdate(
    { lenderName: "Other" },
    { lenderName: "Other", domain: "other", isDefault: true, isActive: true },
    { upsert: true, new: true }
  );
};

module.exports = mongoose.model('Lender', lenderSchema);
