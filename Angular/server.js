// server.js

// Setup
var express = require('express');
var app = express();
var mysql = require('mysql');
var morgan = require('morgan');
var bodyParse = require('body-parser');
var connection = mysql.createConnection({
    host        : '127.0.01',
    port        : 3333,
    user        : 'phong',
    password    : 'dtvtest',
    database    : 'lisacatalog',
});

// mySQL config
connection.connect();
/*
var query = 'SELECT 1 + 1 AS solution;';
connection.query(query, function(err, rows, fields){
    if (err) throw err;
    for (var i in rows) {
        console.log('The solution is: ', rows[i].solution);
});
*/
connection.end();

// Configuration
//app.use('/', express.static('./'));
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));

// listen (start app with node server.js)
app.listen(1234);
console.log("Listening");
