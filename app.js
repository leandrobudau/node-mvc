var express = require('express');
var consign = require('consign');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect('mongodb://localhost/database', function (err) {
    if(err)
        console.error('Ocorreu um erro ao tentar conectar o banco de dados');
    console.log('Banco de dados mongoDB conectado');
});


//Configuração para transferencia de dados via method de forms
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());




app.set('view engine','jade');
app.use(express.static(__dirname));

//Create structure to MVC
consign().
	include('models')
    .then('controllers')
    .then('routes')
    .into(app);

app.listen(5000, function () {
    console.log('Running project in port 3000');
});

