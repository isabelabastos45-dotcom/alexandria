var express = require('express');
var router = express.Router();

const Trabalho = require('../models/works');

router.get('/', (req, res) => {
  res.render('publishworks');
});

router.post('/', async (req, res) => {
  console.log(req.body);

  try {
    const trabalho = new Trabalho({
      titulo: req.body.titulo,
      descricao: req.body.descricao,
      autor: req.body.autor
    });

    await trabalho.save();

    res.redirect('/works');
  } catch (erro) {
    console.error(erro);
    res.status(500).send('Erro ao publicar trabalho');
  }
});

module.exports = router;