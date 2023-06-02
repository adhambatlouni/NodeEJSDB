const connection = require('../config/database.config');

exports.signup = (req, res) => {
    res.render('signup');
}

exports.login = (req, res) => {
    res.render('login');
}

exports.customerLogin = (req, res) => {
	// Capture the input fields
	let fn = req.body.fn;
	let password = req.body.password;

	if (fn && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT customer_fn, customer_password FROM customer WHERE customer_fn = ? AND customer_password = ?'
                        , [fn, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.body.loggedin = true;
				req.body.fn = fn;
				// Redirect to home page
				res.redirect('/homepage');
			} else {
				res.send('Incorrect Username and/or Password!');
			}			
			res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
}

exports.addCustomer = (req, res) => {
    const {fn, ln, email, password} = req.body;
    if (fn && ln && email && password) {
        let addCustomerSQL = `INSERT INTO customer
                            (customer_fn, customer_ln, customer_email, customer_password)
                            VALUES
                            ("${fn}", "${ln}", "${email}", "${password}")`;

        connection.query(addCustomerSQL, (err, result)=>{
        if(err) throw err;
        res.redirect("/homepage");
    })
    } else {
        res.send('Please enter data');   
    }
}

exports.deleteCustomer = (req, res) => {
    const {id} = req.query;
    
    let deleteSQL = `delete from customer where customer_id = ${id}`;
    connection.query(deleteSQL, (err, result)=>{
        if(err) throw err;
        let selectSql =  `SELECT * from customer`;
                        
        connection.query(selectSql, (err, result)=>{
            if(err) throw err;
            res.render('info', { customer: result });
        })
    })
}

exports.customerInfo = (req, res) => {
    let infoSql = `select * from customer`; 
    connection.query(infoSql, (err, result)=>{

        if(err){
            let errorMsg = {
                success: false,
                message: 'an error occured, try again later',
                errorDetails: err,
            }
            req.send(errorMsg);
        }
        res.render("Info", {customer: result})
    })
}