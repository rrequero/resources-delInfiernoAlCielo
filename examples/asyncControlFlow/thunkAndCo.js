'use strict';
var thunks = require('thunks')();
var fs = require('fs');
var co = require('co');


var readFile = thunks.thunkify(fs.readFile);
var writeFile = thunks.thunkify(fs.writeFile);

//sequential
co(function* (){
    try{
        var data1 = yield readFile('file1.txt', 'utf8');
        var data2 = yield readFile('file2.txt', 'utf8');
        var data3 = yield readFile('file3.txt', 'utf8');
    	yield writeFile('completeFileSequential.txt', data1+data2+data3);
    }catch(e){
        console.log(e);
    }
});

//parallel
co(function*(){

    var data = yield [readFile('file1.txt', 'utf8'), readFile('file2.txt', 'utf8'), readFile('file3.txt', 'utf8')];

	yield writeFile('completeFileParallel.txt', data.join(''));
    console.log('File saved!');
});
