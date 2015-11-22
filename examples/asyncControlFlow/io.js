'use strict';
var thunkify = require('./thunkify');
var fs = require('fs');
var run = require('./run');
var co = require('co');

var readFile = thunkify(fs.readFile);

var enMayusculas = function(texto, cb){
	setTimeout(function(){

		cb(false, texto.toUpperCase());
	}, 1000);
};
var enMayusculasThunk = thunkify(enMayusculas);



run(function*(){

	var saludo = yield readFile('./read.txt');
	var saludoMay = yield enMayusculasThunk(saludo.toString());
	console.log('Saludo ' + saludoMay);
});
