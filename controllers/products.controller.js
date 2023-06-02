const connection = require('../config/database.config');

exports.productsInfo = (req, res) => {
    res.render('products');    
}

exports.menu = (req, res) => {
    res.render('menu');    
}