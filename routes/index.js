var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hieu', function(req, res, next){
  res.render('hieu');
});

// product

router.get('/product/deleteProduct', function(req, res, next){
  res.render('product/deleteProduct');
});
router.get('/product/updateProduct', function(req, res, next){
  res.render('product/updateProduct');
});
router.get('/product/addProduct', function(req, res, next){
  res.render('product/addProduct');
});

// category
router.get('/category/addCategory', function(req, res, next){
  res.render('category/addCategory');
});
router.get('/category/deleteCategory', function(req, res, next){
  res.render('category/deleteCategory');
});
router.get('/category/listCategory', function(req, res, next){
  res.render('category/listCategory');
});
router.get('/category/updateCategory', function(req, res, next){
  res.render('category/updateCategory');
});

module.exports = router;
