var express = require('express');
var router = express.Router();
var Category = require('../models/category');
var Product = require('../models/product');
/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find({}, function(err, data){
    // res.json(data);
     res.render('index', {product: data});
   })
 });

 router.get('/product/remove/:productId', function(req, res, next){
  Category.deleteOne({_id: req.params.productId}, function(err){
    res.redirect('/');
  });
});

router.post('/product/save-add', function(req, res, next){
  // thu thập dữ liệu từ form
  let {name, image, price,cate_id,detail} = req.body;
  
  // tạo ra đối tượng mới dạng Category
  let model = new Product();

  // Cập nhật lại thông tin đối tượng vừa tạo với dữ liệu thu thập được từ form
  model.name = name;
  model.image = image;
  model.price = price;
 /// model.cate_id = cate_id;
  model.detail = detail;
  // Lưu đối tượng với csdl
  model.save();

  // điều hướng website về danh sách danh mục
  res.redirect('/product');
});


router.get('/hieu', function(req, res, next){
  res.render('hieu');
});

router.get('/Category', function(req, res, next){
  Category.find({}, function(err, data){
    //res.json(data);
    res.render('Category', {cates: data});
  })
});
router.post('/cates/save-add', function(req, res, next){
  // thu thập dữ liệu từ form
  let {name, image, description} = req.body;
  
  // tạo ra đối tượng mới dạng Category
  let model = new Category();

  // Cập nhật lại thông tin đối tượng vừa tạo với dữ liệu thu thập được từ form
  model.name = name;
  model.image = image;
  model.description = description;

  // Lưu đối tượng với csdl
  model.save();

  // điều hướng website về danh sách danh mục
  res.redirect('/Category');
});

router.get('/cates/remove/:cateId', function(req, res, next){
  Category.deleteOne({_id: req.params.cateId}, function(err){
    res.redirect('/Category');
  });
});



module.exports = router;
