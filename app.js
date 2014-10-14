var express = require('express');
var port = process.env.PORT ||8000;
var favicon = require('serve-favicon');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var routes = require('./routes/index');
var Movie = require('./models/movie');
var User = require('./models/user');
var mongoStore = require('connect-mongo')(express);
var path = require('path');

var app = express();

module.exports = app;

var dbUrl = 'mongodb://localhost/myMovies';
mongoose.connect(dbUrl);
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('views', path.join(__dirname, 'bower_components'));
app.use(express.static(path.join(__dirname, 'public')));
app.locals.moment = require('moment');
app.set('views', './views/pages');
app.set('view engine', 'ejs');
app.use(bodyParser());
app.use(express.cookieParser());
app.use(express.session({
    secret:"myMovies",
    store:new mongoStore({
        url:dbUrl,
        collection:'sessions'
    })

}));

app.listen(port);
console.log('myMoves strats at port:' + port);

app.use('/', routes);

