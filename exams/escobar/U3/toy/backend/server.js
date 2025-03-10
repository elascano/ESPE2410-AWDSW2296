const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PDFDocument = require('pdfkit');
const fs = require('fs');

const app = express();
const PORT = 5000; // Puerto fijo en 5000 para entorno local

// MongoDB connection
mongoose.connect('mongodb+srv://toy:toy@cluster0.6wtaa.mongodb.net/ToyPartsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const toyPartSchema = new mongoose.Schema({
    name: String,
    model: String,
    brand: String,
    price: Number,
    amount: Number
});

const ToyPart = mongoose.model('ToyPart', toyPartSchema);

// Middleware
app.use(express.json());
app.use(cors());

// Insert sample data if empty
(async () => {
    const count = await ToyPart.countDocuments();
    if (count === 0) {
        await ToyPart.insertMany([
            { name: 'Car Wheel', model: 'CW2023', brand: 'ToyBrandA', price: 12.99, amount: 50 },
            { name: 'Doll Head', model: 'DH001', brand: 'ToyBrandB', price: 5.49, amount: 30 },
            { name: 'Robot Arm', model: 'RA2015', brand: 'ToyBrandC', price: 15.99, amount: 20 }
        ]);
        console.log("Datos de ejemplo agregados exitosamente.");
    }
})();

// Routes
app.get('/api/toyparts', async (req, res) => {
    const parts = await ToyPart.find();
    res.json(parts);
});

// Report route
app.get('/api/toyparts/report', async (req, res) => {
    const parts = await ToyPart.find();

    const doc = new PDFDocument();
    const fileName = 'ToyPartsReport.pdf';

    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
    res.setHeader('Content-Type', 'application/pdf');

    doc.pipe(res);

    doc.fontSize(18).text('Toy Parts Report', { align: 'center' });
    doc.moveDown();

    parts.forEach(part => {
        doc
            .fontSize(12)
            .text(`Name: ${part.name}`)
            .text(`Model: ${part.model}`)
            .text(`Brand: ${part.brand}`)
            .text(`Price: $${part.price.toFixed(2)}`)
            .text(`Amount: ${part.amount}`)
            .moveDown();
    });

    doc.end();
});

// Escuchar en el puerto 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
