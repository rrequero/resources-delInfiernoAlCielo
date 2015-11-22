'use strict';
var thunkify = require('./thunkify');
var fs = require('fs');
var run = require('./run');

var readFile = thunkify(fs.readFile);
var writeFile = thunkify(fs.writeFile);

run(function*(){
    var data1 = yield readFile('file1.txt', 'utf8');
    var data2 = yield readFile('file2.txt', 'utf8');
    var data3 = yield readFile('file3.txt', 'utf8');
	yield writeFile('completeFile.txt', data1+data2+data3);
    console.log('File saved!');
});
