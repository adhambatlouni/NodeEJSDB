var express = require("express");
var router = express.Router();

const customer = require('../controllers/customer.controller');

router.get('/signup', customer.signup);

router.get('/login', customer.login);

router.get('/', customer.login);

router.post('/customerLogin', customer.customerLogin);

router.post('/addCustomer', customer.addCustomer);

router.get('/deleteCustomer', customer.deleteCustomer);

router.get('/info', customer.customerInfo)

module.exports = router;