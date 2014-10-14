var express = require('express');
var port = process.env.PORT ||8000;
var favicon = require('serve-favicon');
var mongoose = require('mongoose');
var session    = require('express-session');
var mongoStore = require('connect-mongo')(session);
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var routes = require('./routes/index');
var Movie = require('./models/movie');
var User = require('./models/user');
var path = require('path');
var dburl = 'mongodb://localhost/myMovies';

var app = express();

module.exports = app;

mongoose.connect(dburl);
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('views', path.join(__dirname, 'bower_components'));
app.use(express.static(path.join(__dirname, 'public')));
app.locals.moment = require('moment');
app.set('views', './views/pages');
app.set('view engine', 'ejs');
app.use(bodyParser());
app.use(cookieParser());
app.use(session({
    secret:'myMovies',
    store:new mongoStore({
       url:dburl,
       collection:'sessions'
    })
}));

app.listen(port);
console.log('myMoves strats at port:' + port);

app.use('/', routes);

