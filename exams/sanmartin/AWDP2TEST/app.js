const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;


const dbURI = 'mongodb+srv://josesito:1234@cluster0.sercl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.log('Error de conexión:', err));


const productoSchema = new mongoose.Schema({
  serialNumber: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  quality: { type: String, required: true },
  price: { type: Number, required: true }
});


const Producto = mongoose.model('Producto', productoSchema);

app.get('/obtenerProductos', async (req, res) => {
  try {
   
    const productos = await Producto.find();
    res.json(productos);  
  } catch (error) {
    console.log(error);
    res.status(500).send('Error al obtener los productos');
  }
});


app.listen(port, () => {
  console.log(`Servidor Express corriendo en http://localhost:${port}`);
});
