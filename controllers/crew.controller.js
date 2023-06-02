const connection = require('../config/database.config');

exports.crewInfo = (req, res) => {

    let crewInfo = `select manager_name,
    manager_email,
    manager_contactno
    from manager`;

    connection.query(crewInfo, (err, result)=>{
        
        if(err){
            let errorMsg = {
            success: false,
            message: 'an error occured, try again later',
            errorDetails: err,
            }
            req.send(errorMsg);
        }
        res.render("crew", {manager: result})
    })    
}