var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/index.html', function(req, res, next) {
  res.render('index');
});

router.get('/category.html', (req, res, next) => {
  res.render('category');
});

router.get('/product.html', (req, res, next) => {
  res.render('product');
});

router.get('/cart.html', (req, res, next) => {
  res.render('cart');
});

router.get('/checkout.html', (req, res, next) => {
  res.render('checkout');
});

router.get('/login.html', (req, res, next) => {
  res.render('login');
});

router.get('/registration.html', (req, res, next) => {
  res.render('registration');
});

router.get('/forgot-password.html', (req, res, next) => {
  res.render('forgot-password');
});

router.get('/order-history.html', (req, res, next) => {
  res.render('order-history');
});

router.get('/accessories.html', (req, res, next) => {
  res.render('accessories');
});

router.get('/shoes.html', (req, res, next) => {
  res.render('shoes');
});

module.exports = router;
