const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const app = express();
app.use(express.json());

console.log("🔥 Conectando a la base de datos:", process.env.DB_NAME);

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: "mssql",
    logging: console.log, // Habilita logs de SQL para depuración
    dialectOptions: {
        options: {
            encrypt: false, // Cambia a false si tienes problemas con SSL
            trustServerCertificate: true,
        },
    },
});

sequelize.authenticate()
    .then(() => console.log("✅ Conectado a SQL Server"))
    .catch(err => console.error("❌ Error de conexión:", err));

const Product = sequelize.define("Product", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
});

const Sale = sequelize.define("Sale", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    productId: { type: DataTypes.INTEGER, allowNull: false },
    quantitySold: { type: DataTypes.INTEGER, allowNull: false },
});

Product.hasMany(Sale, { foreignKey: "productId" });
Sale.belongsTo(Product, { foreignKey: "productId" });

sequelize.sync().then(() => console.log("📦 Base de datos sincronizada"));

app.post("/api/inventory/add-product", async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post("/api/inventory/sell-product", async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const product = await Product.findByPk(productId);

        if (!product || product.quantity < quantity) {
            return res.status(400).json({ error: "Stock insuficiente o producto no encontrado" });
        }

        product.quantity -= quantity;
        await product.save();
        await Sale.create({ productId, quantitySold: quantity });

        res.json({ name: product.name, remainingStock: product.quantity });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/api/inventory/stock-status", async (req, res) => {
    try {
        const products = await Product.findAll({ include: Sale });

        console.log("📊 Productos obtenidos de la BD:", JSON.stringify(products, null, 2)); // Verifica en consola

        if (products.length === 0) {
            return res.json({ error: "No hay productos registrados en la base de datos" });
        }

        const inventoryStatus = products.map(p => ({
            id: p.id,
            name: p.name,
            initialQuantity: p.quantity + (p.Sales.reduce((sum, s) => sum + s.quantitySold, 0) || 0),
            sold: p.Sales.reduce((sum, s) => sum + s.quantitySold, 0) || 0,
            remainingStock: p.quantity,
        }));

        res.json(inventoryStatus);
    } catch (error) {
        console.error("❌ Error al obtener stock:", error);
        res.status(500).json({ error: error.message });
    }
    console.log("🛠 Consultando en la base de datos:", process.env.DB_NAME);
 
});

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => console.log(` Servidor corriendo en el puerto ${PORT}`));
