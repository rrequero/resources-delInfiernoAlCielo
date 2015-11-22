var fs = require('fs');
fs.readFile('file1.txt', 'utf8', function(err, data1) {
    if (err) { return console.log(err); }
    fs.readFile('file2.txt', 'utf8', function(err, data2) {
        if (err) { return console.log(err);}
        fs.readFile('file3.txt', 'utf8', function(err, data3) {
            if (err) { return console.log(err); }
            fs.writeFile("completeFile.txt", data1+data2+data3, function(err) {
                if (err) { return console.log(err); }
                console.log("File saved!");
            });
        });
    });
});
