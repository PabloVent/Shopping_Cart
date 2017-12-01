var express = require('express');
var router = express.Router();
var Product = require('../models/product');

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

module.exports = router;
