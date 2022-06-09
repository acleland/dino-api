const { Router } = require('express');
const Dino = require('../models/Dino');

const router = Router();

router.get('/', async (req, res) => {
  const dinos = await Dino.getAll();
  return res.json(dinos);
});

module.exports = router;
