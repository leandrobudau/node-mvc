var express = require('express');
var load = require('express-load');

var app = express();
app.set('view engine','jade');


//Create structure to MVC
load('models')
    .then('controllers')
    .then('routes')
    .into(app);

app.listen(3000, function () {
    console.log('Running project in port 3000');
});

