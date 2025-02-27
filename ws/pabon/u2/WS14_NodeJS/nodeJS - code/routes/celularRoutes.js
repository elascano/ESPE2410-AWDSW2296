const express = require('express');

const celularRoutes = db => {
  const router = express.Router();

  router.get('/', (req, res) => {
    const { marca, precioMin, precioMax } = req.query;

    let sql = 'SELECT * FROM celulares WHERE 1=1';
    const params = [];

    if (marca) {
      sql += ' AND marca = ?';
      params.push(marca);
    }

    if (precioMin) {
      sql += ' AND precio >= ?';
      params.push(precioMin);
    }

    if (precioMax) {
      sql += ' AND precio <= ?';
      params.push(precioMax);
    }

    db.query(sql, params, (err, results) => {
      if (err) return res.status(500).json({ message: 'Error al filtrar celulares', error: err });
      res.json(results);
    });
  });

  // insert
  router.post('/', (req, res) => {
    const { marca, modelo, precio, stock } = req.body;
    const sql = 'INSERT INTO celulares (marca, modelo, precio, stock) VALUES (?, ?, ?, ?)';
    db.query(sql, [marca, modelo, precio, stock], (err, result) => {
      if (err) return res.status(500).json({ message: 'Error al crear celular', error: err });
      res.status(201).json({ id: result.insertId, marca, modelo, precio, stock });
    });
  });

  // get
  router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM celulares WHERE id = ?', [id], (err, results) => {
      if (err) return res.status(500).json({ message: 'Error al obtener celular', error: err });
      if (results.length === 0) return res.status(404).json({ message: 'Celular no encontrado' });
      res.json(results[0]);
    });
  });

  // update
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { marca, modelo, precio, stock } = req.body;
    const sql = 'UPDATE celulares SET marca = ?, modelo = ?, precio = ?, stock = ? WHERE id = ?';
    db.query(sql, [marca, modelo, precio, stock, id], (err, result) => {
      if (err) return res.status(500).json({ message: 'Error al actualizar celular', error: err });
      res.json({ message: 'Celular actualizado' });
    });
  });

  // delete
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM celulares WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) return res.status(500).json({ message: 'Error al eliminar celular', error: err });
      res.json({ message: 'Celular eliminado' });
    });
  });

  return router;
};

module.exports = celularRoutes;
