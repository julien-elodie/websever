var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
// var flash = require('connect-flash');

var geetest = require('gt3-sdk');

var index = require('./routes/index');
var users = require('./routes/users');
var YouTube = require('./routes/YouTube');
var videos = require('./routes/videos');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use(cookieParser('user'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(session({
    secret: 'user',
    cookie: {
        maxAge: 60*1000,
    },
    resave: true,
    saveUninitialized: true,
}));
// app.use(flash())

app.use('/', index);
app.use('/users', users);
app.use('/YouTube', YouTube);
app.use('/videos', videos);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});



module.exports = app;