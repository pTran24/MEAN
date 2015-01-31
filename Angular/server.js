var express = require('express');
var app = express();
app.use('/', express.static('./'));
console.log("Listening");
app.listen(1234);
