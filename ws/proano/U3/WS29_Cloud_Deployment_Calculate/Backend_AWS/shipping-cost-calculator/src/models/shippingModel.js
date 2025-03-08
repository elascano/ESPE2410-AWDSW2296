const mongoose = require('mongoose');

const shippingSchema = new mongoose.Schema({
    weight: {
        type: Number,
        required: true
    },
    distance: {
        type: Number,
        required: true
    }
});

const Shipping = mongoose.model('Shipping', shippingSchema);

module.exports = Shipping;