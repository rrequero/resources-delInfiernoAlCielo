var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var factorial = require("./factorial");


suite
    .add('regular', function() {
        factorial.factorial(20);
    })
    .add('generator', function() {
        for (var n of factorial.factorialGenerator(20));
    })

.on('complete', function() {
        console.log('resultados');
        this.forEach(function(result) {
            console.log(result.name, result.count);
        });
    })
    .run({ 'async': true });
