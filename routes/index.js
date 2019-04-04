var express = require('express');
var router = express.Router();
var Category = require('../models/category');
var Product = require('../models/product');

// npm i --save multer
var multer = require('multer');
// npm i --save shortid
var shortid = require('shortid');

var storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './public/images');
  },
  filename: function(req, file, cb){
    
    cb(null, shortid.generate() + '-' + file.originalname);
  }
});
var upload = multer({storage: storage});


/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find({}, function(err, data){
    // res.json(data);
     res.render('index', {products: data});
   })
 });

 router.get('/products/remove/:productId', function(req, res, next){
  Product.deleteOne({_id: req.params.productId}, function(err){
    res.redirect('/');
  });
});

router.post('/products/save-add', upload.single('image'),function(req, res, next){
  var {name, price, detail} = req.body;
  var image = req.file.path.replace('public', '');
  var model = new Product();

  model.name = name;
  model.image = image;
  model.price = price;
  model.detail = detail;

  model.save(function(err){
    res.redirect('/');
  });
});

router.get('/products/edit/:cId', function(req, res, next){
  var cId = req.params.cId;
  Product.findOne({_id: cId}, function(err, data){
    if(err){
      res.send('id khong ton tai');
    }
    res.render('product/updateProduct', {products: data});
  });

});

router.post('/products/save-edit', upload.single('image'), function(req, res, next){
  
  // neu khong upload anh => req.file == null
  let {id, name, detail,price} = req.body;
  Product.findOne({_id: id}, function(err, model){
    if(err){
      res.send('Id khong ton tai');
    }

    model.name = name;
    model.detail = detail;
    model.price = price;
    if(req.file != null){
      model.image = req.file.path.replace('public', '');
    }
    model.save(function(err){
      if(err){
        res.send('cap nhat khong thanh cong');
      }

      res.redirect('/');
    })
  })

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

router.post('/cates/save-add', upload.single('image'),function(req, res, next){
  var {name, description} = req.body;
  var image = req.file.path.replace('public', '');
  var model = new Category();
  model.name = name;
  model.image = image;
  model.description = description;

  model.save(function(err){
    res.redirect('/Category');
  });
});


router.get('/cates/edit/:cId', function(req, res, next){

  var cId = req.params.cId;

  Category.findOne({_id: cId}, function(err, data){
    if(err){
      res.send('id khong ton tai');
    }
    res.render('category/updateCategory', {cate: data});
  });

});

router.post('/cates/save-edit', upload.single('image'), function(req, res, next){
  
  // neu khong upload anh => req.file == null
  let {id, name, description} = req.body;
  Category.findOne({_id: id}, function(err, model){
    if(err){
      res.send('Id khong ton tai');
    }

    model.name = name;
    model.description = description;
    if(req.file != null){
      model.image = req.file.path.replace('public', '');
    }
    model.save(function(err){
      if(err){
        res.send('cap nhat khong thanh cong');
      }

      res.redirect('/Category');
    })
  })

});

router.get('/cates/remove/:cateId', function(req, res, next){
  Category.deleteOne({_id: req.params.cateId}, function(err){
    res.redirect('/Category');
  });
});

module.exports = router;
