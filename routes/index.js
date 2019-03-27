var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hieu', function(req, res, next){
  res.render('hieu');
});
router.get('/Category', function(req, res, next){
  res.render('Category');
});
module.exports = router;
