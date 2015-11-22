'use strict';
function run(genFn) {
    function next(err, value) { // [3]
        if (err) {
            return gen.throw(err); // [4]
        }
        var result = gen.next(value); //[5]

        if (result.done) { // [6]
            return;
        }
        var cbFn = result.value; // [7]
        cbFn(next);
    }
    var gen = genFn(); // [1]
    next(); // [2]
}

module.exports = run;
