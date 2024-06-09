var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/dashboard", function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/', function(req, res, next) {
  res.redirect("/dashboard");
});
module.exports = router;
