var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/add-new', function(req, res, next) {
  res.send('router users add new user form');
});

// product
router.get('/product/addProduct', function(req, res, next){
  res.render('product/addProduct');
});
router.get('/product/deleteProduct', function(req, res, next){
  res.render('product/deleteProduct');
});
router.get('/product/updateProduct', function(req, res, next){
  res.render('product/updateProduct');
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
