const ShippingService = require('../services/shippingService');

class ShippingController {
    constructor() {
        this.shippingService = new ShippingService();
    }

    async calculateShippingCost(req, res) {
        try {
            const packages = await this.shippingService.getPackages();
            const shippingCosts = packages.map(pkg => {
                const cost = this.shippingService.calculateCost(pkg.weight, pkg.distance);
                return {
                    packageId: pkg._id,
                    weight: pkg.weight,
                    distance: pkg.distance,
                    shippingCost: cost
                };
            });
            res.status(200).json(shippingCosts);
        } catch (error) {
            res.status(500).json({ message: 'Error calculating shipping costs', error: error.message });
        }
    }
}

module.exports = ShippingController;