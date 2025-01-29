const port = 3018;
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
    `mongodb+srv://oop:oop@cluster0.9knxc.mongodb.net/oop?retryWrites=true&w=majority&appName=Cluster0`,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("System connected to MongoDb Database"));

app.use(express.json());

// Ruta base
app.get("/", (req, res) => {
    res.send("Welcome to Matias's Computer Store API!");
});

// Importar y usar rutas
const customerRouter = require("./routes/customerRoutes");
app.use("/computerstore", customerRouter);

// Iniciar servidor
app.listen(port, () =>
    console.log("Matias's Computer Store --> Listening on port " + port)
);
