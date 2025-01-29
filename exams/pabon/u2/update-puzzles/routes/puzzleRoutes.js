const express = require('express');

const puzzleRoutes = db => {
  const router = express.Router();

  router.get('/', (req, res) => {
    const { brand, difficulty_level, priceMin, priceMax } = req.query;

    let sql = 'SELECT * FROM puzzles WHERE 1=1';
    const params = [];

    if (brand) {
      sql += ' AND brand = ?';
      params.push(brand);
    }

    if (difficulty_level) {
      sql += ' AND difficulty_level = ?';
      params.push(difficulty_level);
    }

    if (priceMin) {
      sql += ' AND price >= ?';
      params.push(priceMin);
    }

    if (priceMax) {
      sql += ' AND price <= ?';
      params.push(priceMax);
    }

    db.query(sql, params, (err, results) => {
      if (err) return res.status(500).json({ message: 'Error al obtener puzzles', error: err });
      res.json(results);
    });
  });

  router.post('/', (req, res) => {
    const { serial_number, brand, model, pieces, difficulty_level, is_new, price } = req.body;
    const sql = 'INSERT INTO puzzles (serial_number, brand, model, pieces, difficulty_level, is_new, price) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [serial_number, brand, model, pieces, difficulty_level, is_new, price], (err, result) => {
      if (err) return res.status(500).json({ message: 'Error al crear puzzle', error: err });
      res.status(201).json({ id: result.insertId, serial_number, brand, model, pieces, difficulty_level, is_new, price });
    });
  });

  router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM puzzles WHERE id = ?', [id], (err, results) => {
      if (err) return res.status(500).json({ message: 'Error al obtener puzzle', error: err });
      if (results.length === 0) return res.status(404).json({ message: 'Puzzle no encontrado' });
      res.json(results[0]);
    });
  });

  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { serial_number, brand, model, pieces, difficulty_level, is_new, price } = req.body;
    const sql = 'UPDATE puzzles SET serial_number = ?, brand = ?, model = ?, pieces = ?, difficulty_level = ?, is_new = ?, price = ? WHERE id = ?';
    db.query(sql, [serial_number, brand, model, pieces, difficulty_level, is_new, price, id], (err, result) => {
      if (err) return res.status(500).json({ message: 'Error al actualizar puzzle', error: err });
      res.json({ message: 'Puzzle actualizado' });
    });
  });

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM puzzles WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) return res.status(500).json({ message: 'Error al eliminar puzzle', error: err });
      res.json({ message: 'Puzzle eliminado' });
    });
  });

  return router;
};

module.exports = puzzleRoutes;
