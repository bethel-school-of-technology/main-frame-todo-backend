var express = require('express');
var router = express.Router();

/* GET index listing. */
router.get('/contacts', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;