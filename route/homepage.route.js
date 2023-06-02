var express = require("express");
var router = express.Router();

const homepage = require('../controllers/homepage.controller');

router.get('/homepage', homepage.homePageInfo);

module.exports = router;