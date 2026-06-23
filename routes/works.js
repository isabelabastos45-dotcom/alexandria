var express = require('express');
var router = express.Router();

const Trabalho = require('../models/works');

router.get('/', async (req, res) => {
  const pesquisa = req.query.q;
  let filtro = {};
  if (pesquisa) {
    filtro.titulo = {
      $regex: pesquisa,
      $options: 'i'
    };
  }
  const trabalhos = await Trabalho.find(filtro);

  res.render('works', {
    trabalhos,
    pesquisa
  });
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