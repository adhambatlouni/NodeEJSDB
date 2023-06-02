const connection = require('../config/database.config');

exports.homePageInfo = (req, res) => {
    let homePage = `select shop_name,
                    shop_email,
                    shop_contactno
                    from shop`;

    connection.query(homePage, (err, result)=>{
        if(err){
            let errorMsg = {
            success: false,
            message: 'an error occured, try again later',
            errorDetails: err,
            }
        req.send(errorMsg);
    }   
    res.render('homepage', {shop: result})
    })
}