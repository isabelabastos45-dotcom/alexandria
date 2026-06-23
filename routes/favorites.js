var express = require('express');
var router = express.Router();

const User = require('../models/User');


router.post('/:id', async (req, res) => {
  if (!req.session.usuario || !req.session.usuario._id) {
    return res.redirect('/login');
  }

  await User.findByIdAndUpdate(
    req.session.usuario._id,
    {
      $addToSet: {
        favoritos: req.params.id
      }
    }
  );

  res.redirect('/favorites');
});

router.get('/', async (req, res) => {
  if (!req.session.usuario || !req.session.usuario._id) {
    return res.redirect('/login');
  }
  const pesquisa = req.query.q || '';
  const usuario = await User.findById(req.session.usuario._id)
    .populate('favoritos');

  let trabalhos = usuario.favoritos || [];

  if (pesquisa) {
    const termo = pesquisa.toLowerCase();
    trabalhos = trabalhos.filter(t =>
      t.titulo.toLowerCase().includes(termo)
    );
  }

  return res.render('favorites', {
    trabalhos,
    pesquisa
  });
});

module.exports = router;