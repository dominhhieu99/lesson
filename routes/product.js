var express = require('express');
var router = express.Router();

/* GET users listing. */
// product

router.get('/deleteProduct', function(req, res, next){
  res.render('product/deleteProduct');
});
router.get('/updateProduct', function(req, res, next){
  res.render('product/updateProduct');
});
router.get('/addProduct', function(req, res, next){
  res.render('product/addProduct');
});


module.exports = router;
