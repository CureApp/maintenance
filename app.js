var express = require('express');
var path = require('path');
var logger = require('morgan');

var health = require('./routes/health');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));

app.use('/health', health)

app.use(function(req, res, next) {
  res.status(503)
  res.render('service-unavailable')
});

module.exports = app;
