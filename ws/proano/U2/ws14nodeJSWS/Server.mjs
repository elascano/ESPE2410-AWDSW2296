import express from "express";
const app = express();
const port = 3002;

app.get('/', (req, res) => {
    res.send('Welcome to Jose\'s Server!');
});
app.listen(port, () => {
    console.log(`Joses Server Server is running on port ${port}`);
});