var express = require('express');
var router = express.Router();

/* Get YouTube's html */
router.get('/', function (req, res, next) {
  res.render('YouTube');
});

module.exports = router;