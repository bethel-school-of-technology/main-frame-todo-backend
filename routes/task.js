var express = require('express');
var router = express.Router();

/* GET task listing. */
router.get('/task', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;