const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  serialNumber: { type: String, required: true, unique: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  category: { type: String, required: true },
  condition: { type: String, required: true, enum: ['New', 'Used'] },
  price: { type: Number, required: true },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Product', productSchema);
