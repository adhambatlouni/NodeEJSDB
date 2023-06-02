const express = require('express');
const { v4: uuidv4 } = require('uuid');
const connection = require('./config/database.config');
const path = require('path');
const bodyParser = require('body-parser');
const { response } = require('express');

const app = express();

module.exports = app;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:false}));

var HomepageRoute = require('./route/homepage.route');

var OffersRoute = require('./route/offers.route');

var ProductsRoute = require('./route/products.route');

var CrewRoute = require('./route/crew.route');

var CustomerRoute = require('./route/customer.route');

var OrdersRoute = require('./route/orders.route');

app.use('', HomepageRoute);

app.use('', OffersRoute);

app.use('', ProductsRoute);

app.use('', CrewRoute);

app.use('', CustomerRoute);

app.use('', OrdersRoute);

const PORT = 3001;

app.listen(PORT);

console.log(`Server is running on ${PORT}`);

app.use(express.static(__dirname + '/public'));