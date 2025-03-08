const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const shippingRoutes = require('./routes/shippingRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3015;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/shipping', shippingRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});