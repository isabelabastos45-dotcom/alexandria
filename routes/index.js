const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', async (req, res) => {
    const usuarioLogado =
        req.session && req.session.usuario
            ? req.session.usuario
            : undefined;

    try {
        const response = await axios.get(
            'https://ron-swanson-quotes.herokuapp.com/v2/quotes'
        );

        const quote = response.data[0];

        res.render('index', {
            title: 'Home',
            usuario: usuarioLogado,
            quote
        });
    } catch (error) {
        console.error(error);

        res.render('index', {
            title: 'Home',
            usuario: usuarioLogado,
            quote: 'Erro ao obter mensagem.'
        });
    }
});

module.exports = router;