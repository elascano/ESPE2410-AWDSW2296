const Shipping = require('../models/shippingModel');

class ShippingService {
    constructor() {
    }

    async getPackages() {
        return await Shipping.find();
    }

    calculateCost(weight, distance) {
        const baseRate = 5; // Base rate for shipping
        const weightRate = 1.5; // Rate per kg
        const distanceRate = 0.5; // Rate per km

        const cost = baseRate + (weight * weightRate) + (distance * distanceRate);
        return cost;
    }

    async addPackage(packageData) {
        const newPackage = new Shipping(packageData);
        return await newPackage.save();
    }

    async updatePackage(id, packageData) {
        return await Shipping.findByIdAndUpdate(id, packageData, { new: true });
    }

    async deletePackage(id) {
        return await Shipping.findByIdAndDelete(id);
    }
}

module.exports = ShippingService;