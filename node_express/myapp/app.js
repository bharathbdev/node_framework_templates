var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Load environment variables
require('dotenv').config();

// Import database configuration
const connectDB = require('./src/config/database');

// Import routes
var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');

// Import middleware
const { errorHandler, notFound } = require('./src/middleware/errorHandler');

var app = express();

// Connect to MongoDB
connectDB();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

module.exports = app;
