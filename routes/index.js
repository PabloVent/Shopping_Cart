var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var csrf = require('csurf');

var csrfProtection = csrf();

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err, docs){
    var productChuncks = [];
    var chunckSize = 3;
    for (let i = 0; i < docs.length; i+= chunckSize) {
      productChuncks.push(docs.slice(i, i + chunckSize));
    }
    res.render('shop/index', { title: 'Shopping Cart', products: productChuncks });
  });
  
});

router.get('user/signup', function(req,res,next){
  res.render('user/signup', {csrfToken: req.csrfToken()});
});

module.exports = router;
