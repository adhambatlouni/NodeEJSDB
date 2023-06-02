var express = require("express");
var router = express.Router();

const offers = require('../controllers/offers.controller');

router.get('/offers', offers.offersInfo);

module.exports = router;