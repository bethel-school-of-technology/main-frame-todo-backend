var express = require('express');
var router = express.Router();

/* GET contact listing. */
router.get('/contacts', function(req, res, next) {
  res.send('respond with a resource');
  console.log("contacts")
});

module.exports = router;