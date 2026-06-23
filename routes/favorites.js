var express = require('express');
var router = express.Router();

const User = require('../models/User');

router.post('/:id', async (req, res) => {
  await User.findByIdAndUpdate(
    req.session.usuario.id,
    {
      $addToSet: {
        favoritos: req.params.id
      }
    }
  );

  res.redirect('/favorites');
});

router.get('/', async (req, res) => {
  if (!req.session.usuario || !req.session.usuario.id) {
    return res.redirect('/login');
  }
  const usuario = await User.findById(req.session.usuario.id);
  if (!usuario) {
    return res.redirect('/login');
  }
  await usuario.populate('favoritos');
  return res.render('favorites', {
    trabalhos: usuario.favoritos || []
  });
});

module.exports = router;