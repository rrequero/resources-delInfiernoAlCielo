'use strict';
var should = require('should');
var assert = require('assert');
var fibonacci = require('../fibonacci');

require('mocha-generators').install();
describe('Test example', function() {



    it('Correct fib', function*() {
        var fibGen = fibonacci();
        var num = fibGen.next();
        num.should.be.a.Object;
        num.done.should.be.equal(false);
        num.value.should.be.equal(1);
    });

    it('Correct fib (3 times)', function*() {
        var fibGen = fibonacci();
        fibGen.next();
        fibGen.next();
        var num = fibGen.next();
        num.should.be.a.Object;
        num.done.should.be.equal(false);
        num.value.should.be.equal(2);
    });


});
