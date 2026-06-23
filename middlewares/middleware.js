function auth(req, res, next) {
    if (!req.session || !req.session.usuario) {
        return res.status(401).json({
            msg: "Você precisa estar logado"
        });
    }

    req.usuarioId = req.session.usuario._id;
    next();
}

module.exports = {
    auth
};