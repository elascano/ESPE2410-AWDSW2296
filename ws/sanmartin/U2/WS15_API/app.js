const express = require('express');
const mysql = require('mysql2');

// Crear la aplicación Express
const app = express();
const port = 3001; // Puedes cambiar el puerto si lo prefieres

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'bfbfl0wgtltgn4vaqzjs-mysql.services.clever-cloud.com',
    user: 'uglbkixcek6wynq5',
    password: 'K51uMlLuFC2RLgSk0fY0',
    database: 'bfbfl0wgtltgn4vaqzjs'
});

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error de conexión: ' + err.stack);
        return;
    }
    console.log('Conectado a la base de datos con id ' + connection.threadId);
});

// Función para obtener las columnas de una tabla específica
const getColumnsForTable = (table, callback) => {
    const query = `SHOW COLUMNS FROM ??`;
    connection.query(query, [table], (err, results) => {
        if (err) {
            console.error('Error al obtener columnas:', err);
            callback(err, null);
            return;
        }
        const columns = results.map(row => row.Field); // Extraer solo los nombres de las columnas
        callback(null, columns);
    });
};

// Ruta para obtener datos dinámicamente
app.get('/get-data/:table/:column', (req, res) => {
    const table = req.params.table; // Tabla seleccionada
    const column = req.params.column; // Columna seleccionada
    const value = req.query.value; // Valor de búsqueda (por ejemplo, un id o cualquier otro filtro)

    // Verificar si la tabla existe
    const tableQuery = `SHOW TABLES LIKE ?`;
    connection.query(tableQuery, [table], (err, results) => {
        if (err) {
            console.error('Error al verificar tabla:', err);
            res.status(500).send('Error al verificar tabla');
            return;
        }

        if (results.length === 0) {
            return res.status(400).send('La tabla no existe');
        }

        // Obtener las columnas de la tabla
        getColumnsForTable(table, (err, columns) => {
            if (err) {
                res.status(500).send('Error al obtener las columnas');
                return;
            }

            // Verificar si la columna existe en la tabla
            if (!columns.includes(column)) {
                return res.status(400).send('La columna no existe en la tabla');
            }

            // Crear la consulta dinámica
            const query = `SELECT * FROM ?? WHERE ?? = ?`;
            connection.query(query, [table, column, value], (err, results) => {
                if (err) {
                    console.error('Error al ejecutar la consulta:', err);
                    res.status(500).send('Error al ejecutar la consulta');
                    return;
                }

                if (results.length === 0) {
                    return res.status(404).send('No se encontraron resultados');
                }

                // Enviar los resultados al cliente
                res.json(results);
            });
        });
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
