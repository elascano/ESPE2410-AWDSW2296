const mongoose = require('mongoose');

const ShopperSchema = new mongoose.Schema({
    shopper_id: {
        type: String,
        required: true
    },
    shopper_name: {
        type: String,
        required: true
    },
    toy_name: {
        type: String,
        required: true
    },
    toy_price: {
        type: Number,
        required: true
    },
    toy_quantity: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Shopper', ShopperSchema);