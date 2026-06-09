var express = require('express');
var router = express.Router();

const Trabalho = require('../models/works');

router.get('/', (req, res) => {
  res.render('publishworks');
});

router.post('/', async (req, res) => {
  console.log('POST RECEBIDO');

  await Trabalho.create({
    titulo: req.body.titulo,
    descricao: req.body.descricao
  });

  res.redirect('/works');
});

module.exports = router;