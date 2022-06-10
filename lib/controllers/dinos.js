const { Router } = require('express');
const Dino = require('../models/Dino');

const router = Router();

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  console.log('id', id);
  const dino = await Dino.getById(req.params.id);
  return res.json(dino);
});

router.get('/', async (req, res) => {
  const dinos = await Dino.getAll();
  return res.json(dinos);
});

module.exports = router;
