var express = require("express");
var router = express.Router();

const crew = require('../controllers/crew.controller');

router.get('/crew', crew.crewInfo);

module.exports = router;