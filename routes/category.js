var express = require('express');
var router = express.Router();
var Category = require('../models/category');
/* GET users listing. */
// category
router.get('/addCategory', function(req, res, next){
  res.render('category/addCategory');
});


router.get('/deleteCategory', function(req, res, next){
  res.render('category/deleteCategory');
});

router.get('/updateCategory', function(req, res, next){
  res.render('category/updateCategory');
});




// router.get('/Category', function(req, res, next){
//   Category.find({}, function(err, data){
//     //res.json(data);
//     res.render('Category', {cates: data});
//   })
// });
// router.post('/cates/save-add', function(req, res, next){
//   // thu thập dữ liệu từ form
//   let {name, image, description} = req.body;
  
//   // tạo ra đối tượng mới dạng Category
//   let model = new Category();

//   // Cập nhật lại thông tin đối tượng vừa tạo với dữ liệu thu thập được từ form
//   model.name = name;
//   model.image = image;
//   model.description = description;

//   // Lưu đối tượng với csdl
//   model.save();

//   // điều hướng website về danh sách danh mục
//   res.redirect('/Category');
// });

module.exports = router;
