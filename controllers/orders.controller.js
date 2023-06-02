const connection = require('../config/database.config');

exports.order = (req, res) => {
    let sql = `select * from item; select * from customer; select * from manager`;
    connection.query(sql, (err, result)=>{
        res.render('order', { item:result[0], customer:result[1], manager:result[2]});
    })    
}

exports.addOrder = (req, res) => {
    const {c_id, m_id, i_id} = req.body;
    if (c_id && m_id && i_id) {
        let addOrderSQL = `INSERT INTO orders
                            (customer_id, manager_id, item_id)
                            VALUES
                            ("${c_id}", "${m_id}", "${i_id}")`;

        connection.query(addOrderSQL, (err, result)=>{
        if(err) throw err;
        res.redirect("/menu");
    })
    } else {
        res.send('Please enter data');
        res.end();
    }
}

exports.deleteOrder = (req, res) => {
    const {id} = req.query;
    
    let deleteSQL = `delete from orders where order_id = ${id}`;
    connection.query(deleteSQL, (err, result)=>{
        if(err) throw err;
            let selectSql =  `SELECT orders.order_id, orders.customer_id, customer_fn,
                            customer_ln, orders.item_id, item_name, item_price
                            from (orders inner join customer) inner join item
                            on (orders.customer_id = customer.customer_id
                            and orders.item_id = item.item_id)`;

        connection.query(selectSql, (err, result)=>{
            if(err) throw err;
            res.render('ordersInfo', { orders: result });
        })
    })
}

exports.ordersInfo = (req, res) => {
    let ordersInfonSql = `SELECT orders.order_id, orders.customer_id, customer_fn,
                        customer_ln, orders.item_id, item_name, item_price
                        from (orders inner join customer) inner join item
                        on (orders.customer_id = customer.customer_id
                        and orders.item_id = item.item_id)`;
    connection.query(ordersInfonSql, (err, result)=>{

        if(err){
            let errorMsg = {
                success: false,
                message: 'an error occured, try again later',
                errorDetails: err,
            }
            req.send(errorMsg);
        }
        res.render("ordersInfo", { orders:result})
    })
}