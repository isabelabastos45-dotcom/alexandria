var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('publishworks');
});

module.exports = router;