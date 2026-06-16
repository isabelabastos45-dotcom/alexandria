var express = require('express');
var router = express.Router();

const Trabalho = require('../models/works');

router.get('/', async (req, res) => {
  const trabalhos = await Trabalho.find().populate('autor');
  
  res.render('works', { trabalhos });
});

router.get('/:id', async (req, res) => {
  try {
    const trabalho = await Trabalho.findById(req.params.id);

    if (!trabalho) {
      return res.status(404).send('Trabalho não encontrado');
    }

    res.render('work', { trabalho });

  } catch (erro) {
    console.error(erro);
    res.status(500).send('Erro ao carregar trabalho');
  }
});

module.exports = router;