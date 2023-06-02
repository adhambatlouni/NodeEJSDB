const connection = require('../config/database.config');

exports.offersInfo = (req, res) => {
    res.render('offers');    
}
