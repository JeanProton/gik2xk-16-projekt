var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
/* 
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter); */

app.use('/users', require('./routes/userRoute'));
app.use('/carts', require('./routes/cartsRoute'));
app.use('/products', require('./routes/productRoute'));
app.use('/ratings', require('./routes/ratingsRoute'));
app.use('/cart_rows', require('./routes/cart_rowsRoute'));

module.exports = app;
