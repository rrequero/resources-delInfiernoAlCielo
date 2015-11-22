'use strict';

function thunkify(nodefn) { // [1]
    return function() { // [2]
        var args = Array.prototype.slice.call(arguments);
        return function(cb) { // [3]
            args.push(cb);
            nodefn.apply(this, args);
        };
    };
}

module.exports = thunkify;
