var express = require("express");
var router = express.Router();

const orders = require('../controllers/orders.controller');

router.get('/order', orders.order);

router.post('/addOrder', orders.addOrder);

router.get('/deleteOrder', orders.deleteOrder);

router.get('/ordersInfo', orders.ordersInfo);

module.exports = router;