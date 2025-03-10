const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3014;

app.use(bodyParser.json());
app.use(cors());

const dbURI = 'mongodb+srv://Epciclon:1234@basemadecor.070fd.mongodb.net/madecor_base';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const shopperSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    last_name: String,
    age: Number,
    email: String,
    number_phone: Number,
    state: String
});

const Shopper = mongoose.model('shoppers', shopperSchema, 'shoppers');

app.get('/shoppers/report', async (req, res) => {
    try {
        const state = req.query.state;
        let shoppersData;
        if (state && state !== 'all') {
            shoppersData = await Shopper.find({ state });
        } else {
            shoppersData = await Shopper.find();
        }
        res.json(shoppersData);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
