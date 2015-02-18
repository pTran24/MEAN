// server.js

var express = require('express');
var app = express();
var mysql = require('mysql');
var morgan = require('morgan');
var bodyParse = require('body-parser');
var router = express.Router();

// get environment variables
var port = process.env.PORT || 1234;
var env = process.env.NODE_ENV || 'dev';

// configuration
app.use(express.static(__dirname + '/public'));

if ('dev' == env){
    app.use(morgan('dev'));
}

// define routes
router.param('name', function(req, res, next, name){
    if (name.length > 5){
        console.log("Please shorten name!");
    } else {
        req.name = name;
        next();
    }
});

router.get('/sample', function(req, res){
    res.send('sample!');
});
router.get('/hello/:name', function(req, res){
    //res.send('Hello ' + req.params.name + '!');
    res.send('Hello ' + req.name + '!');
});

// apply routes
app.use('/', router);

// listen (start app with node server.js)
app.listen(port, function(){
    console.log("Listening on %d in %s mode", port, env);
});
