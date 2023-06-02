var express = require("express");
var router = express.Router();

const products = require('../controllers/products.controller');

router.get('/products', products.productsInfo);

router.get('/menu', products.menu);

module.exports = router;