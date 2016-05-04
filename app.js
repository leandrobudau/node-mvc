var express = require('express');
var load = require('express-load');

var app = express();
app.set('view engine','jade');
app.set('views',__dirname + '/views');

