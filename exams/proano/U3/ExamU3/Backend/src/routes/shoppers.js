const express = require('express');
const router = express.Router();
const Shopper = require('../models/Shopper');

// Get total amount of money spent by all shoppers
router.get('/shoppers_total', async (req, res) => {
    try {
        const shoppers = await Shopper.find({});
        const totalAmount = shoppers.reduce((acc, shopper) => acc + shopper.total, 0);
        res.json({ shoppers, totalAmount });
    } catch (error) {
        res.status(500).json({ error: 'Failed to get total amount' });
    }
});

// Get total amount of money spent by a specific shopper
router.get('/:shopper_id/shopper_total', async (req, res) => {
    const { shopper_id } = req.params;
    try {
        const shoppers = await Shopper.find({ shopper_id });
        const totalAmount = shoppers.reduce((acc, shopper) => acc + shopper.total, 0);
        if (shoppers.length > 0) {
            res.json({ shoppers, totalAmount });
        } else {
            res.status(404).json({ error: 'Shopper not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to get shopper total' });
    }
});

module.exports = router;