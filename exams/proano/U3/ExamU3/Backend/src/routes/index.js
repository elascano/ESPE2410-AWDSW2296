const express = require('express');
const router = express.Router();
const shopperRoutes = require('./shoppers');

router.use('/shoppers', shopperRoutes);

module.exports = () => router;