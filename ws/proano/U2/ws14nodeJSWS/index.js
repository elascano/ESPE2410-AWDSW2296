//Jose's port is 3015
const port = 3015;
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://oop:oop@cluster0.9knxc.mongodb.net/oop?retryWrites=true&w=majority&appName=Cluster0`, 
    { useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('System  connected to MongoDB Database'));

app.use(express.json());

const customerRouter = require('./routes/customerRoutes');
app.use('/computerstore', customerRouter);

app.listen(port, () => console.log ('Edisons Computers Store Server is running on port --> ' + port));