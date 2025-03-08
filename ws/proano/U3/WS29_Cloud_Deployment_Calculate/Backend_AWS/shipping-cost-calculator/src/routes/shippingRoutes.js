const express = require('express');
const ShippingController = require('../controllers/shippingController');

const router = express.Router();
const shippingController = new ShippingController();

router.get('/calculate-shipping-cost', shippingController.calculateShippingCost.bind(shippingController));

router.post('/add-shipping-package', async (req, res) => {
    try {
        const newPackage = await shippingController.shippingService.addPackage(req.body);
        res.status(201).json(newPackage);
    } catch (error) {
        res.status(500).json({ message: 'Error adding shipping package', error: error.message });
    }
});

router.put('/update-shipping-package/:id', async (req, res) => {
    try {
        const updatedPackage = await shippingController.shippingService.updatePackage(req.params.id, req.body);
        res.status(200).json(updatedPackage);
    } catch (error) {
        res.status(500).json({ message: 'Error updating shipping package', error: error.message });
    }
});

router.delete('/delete-shipping-package/:id', async (req, res) => {
    try {
        await shippingController.shippingService.deletePackage(req.params.id);
        res.status(200).json({ message: 'Shipping package deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting shipping package', error: error.message });
    }
});

module.exports = router;