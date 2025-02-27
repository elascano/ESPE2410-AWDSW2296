import express from "express";
const app = express();
const port = 3002;

app.get('/',(req, res) => {
    res.send('Welcome to Matias Suarez server!');
});

app.listen(port, () => {
        console.log(`Matias Suarez server running at http://${port}/`);
});

