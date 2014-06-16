////////////////////////////////////////////////////////////////////////////////
// ExpressJS auto generated code                                              //
var express = require('express');                                             //
var path = require('path');                                                   //
var favicon = require('static-favicon');                                      //
var logger = require('morgan');                                               //
var cookieParser = require('cookie-parser');                                  //
var bodyParser = require('body-parser');                                      //
                                                                              //
var routes = require('./routes/index');                                       //
var users = require('./routes/users');                                        //
                                                                              //
var app = express();                                                          //
                                                                              //
// view engine setup                                                          //
app.set('views', path.join(__dirname, 'views'));                              //
app.set('view engine', 'ejs');                                                //
                                                                              //
app.use(favicon());                                                           //
app.use(logger('dev'));                                                       //
app.use(bodyParser.json());                                                   //
app.use(bodyParser.urlencoded());                                             //
app.use(cookieParser());                                                      //
app.use(require('stylus').middleware(path.join(__dirname, 'public')));        //
app.use(express.static(path.join(__dirname, 'public')));                      //
                                                                              //
// app.use('/', routes);                                                      //
app.use('/users', users);                                                     //
                                                                              //
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// My added code
// Require react
var React = require('react');

// Remember to tranform jsx before require (gulp jsx or gulp watch)
var main = require('./main.js');
var test1 = require('./test1.js');
var test2 = require('./test2.js');

// my routing table
app.get('/', viewIndex);
function viewIndex(req, res){
  res.render('index', {title: 'Express',
                       render: React.renderComponentToString(main())});
}

app.get('/test1', function(req,res){
  res.render('index', {title: 'Express',
                       render: React.renderComponentToString(test1())});
});

app.get('/test2', function(req, res){
  res.render('index', {title: 'Express',
                       render: React.renderComponentToString(test2())});
});

////////////////////////////////////////////////////////////////////////////////
// ExpressJS auto generated code                                              //
                                                                              //
/// catch 404 and forward to error handler                                    //
app.use(function(req, res, next) {                                                   //
    var err = new Error('Not Found');                                         //
    err.status = 404;                                                         //
    next(err);                                                                //
});                                                                           //
                                                                              //
/// error handlers                                                            //
                                                                              //
// development error handler                                                  //
// will print stacktrace                                                      //
if (app.get('env') === 'development') {                                       //
    app.use(function(err, req, res, next) {                                          //
        res.status(err.status || 500);                                        //
        res.render('error', {                                                 //
            message: err.message,                                             //
            error: err                                                        //
        });                                                                   //
    });                                                                       //
}                                                                             //
                                                                              //
// production error handler                                                   //
// no stacktraces leaked to user                                              //
app.use(function(err, req, res, next) {                                              //
    res.status(err.status || 500);                                            //
    res.render('error', {                                                     //
        message: err.message,                                                 //
        error: {}                                                             //
    });                                                                       //
});                                                                           //
                                                                              //
                                                                              //
app.set('port', process.env.PORT || 3000);                                    //
                                                                              //
var debug = require('debug')('react-routing');                                //
var server = app.listen(app.get('port'), function() {                                //
  debug('Express server listening on port ' + server.address().port);         //
});                                                                           //
////////////////////////////////////////////////////////////////////////////////
