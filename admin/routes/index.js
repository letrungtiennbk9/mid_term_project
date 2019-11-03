var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index.html', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/recent-orders.html', function(req, res, next) {
  res.render('recent-orders', { title: 'Express' });
});

router.get('/revenues.html', function(req, res, next) {
  res.render('revenues', { title: 'Express' });
});

router.get('/data-tables.html', function(req, res, next) {
  res.render('data-tables', { title: 'Express' });
});

router.get('/accounts.html', function(req, res, next) {
  res.render('accounts', { title: 'Express' });
});

router.get('/products.html', function(req, res, next) {
  res.render('products', { title: 'Express' });
});

router.get('/add-product.html', function(req, res, next) {
  res.render('add-product', { title: 'Express' });
});

router.get('/chart-charts.html', function(req, res, next) {
  res.render('chart-charts', { title: 'Express' });
});


module.exports = router;
