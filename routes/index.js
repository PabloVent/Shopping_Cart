var express = require('express');
var router = express.Router();
var Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err, docs){
    var productChuncks = [];
    var chunckSize = 3;
    res.render('shop/index', { title: 'Shopping Cart', products: docs });
  });
  
});

module.exports = router;
