var express = require('express');
var router = express.Router();

const Trabalho = require('../models/works');

router.get('/', async (req, res) => {
  const trabalhos = await Trabalho.find().populate('autor');
  
  res.render('works', { trabalhos });
});

module.exports = router;