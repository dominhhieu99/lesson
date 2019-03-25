var express = require('express');
var router = express.Router();

/* GET users listing. */
// category
router.get('/addCategory', function(req, res, next){
  res.render('category/addCategory');
});
router.get('/deleteCategory', function(req, res, next){
  res.render('category/deleteCategory');
});
router.get('/listCategory', function(req, res, next){
  res.render('category/listCategory');
});
router.get('/updateCategory', function(req, res, next){
  res.render('category/updateCategory');
});

module.exports = router;
