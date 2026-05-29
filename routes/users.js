const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    return res.json({ msg: "ok" });
});

module.exports = router;