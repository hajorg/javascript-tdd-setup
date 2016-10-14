'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sum_of_primes.js');

describe("Test that constants are computed properly", function() {
  it("should return false if 'str' is given", function() {
    assert(
      lib.sumOfPrimes('str') == false
    );
  });
  it("should give 17 for 10", function() {
    assert(
      lib.sumOfPrimes(10) == 17
    );
  });
  it("should give 8, 1 for constants 4, 2 as a and n respectively", function() {
    assert(
      typeof(lib.sumOfPrimes(10)) == 'number'
    );
  });
  it("should return false if parameter given is 0", function() {
    assert(
      lib.sumOfPrimes(0) == false
    );
  });
  it("should return false if parameter given is 1", function() {
    assert(
      lib.sumOfPrimes(1) == false
    );
  });
  it("should return 2 if parameter given is 2", function() {
    assert(
      lib.sumOfPrimes(2) == 2
    );
  });
  it("should return false if number of parameters given is more than 1", function() {
    assert(
      lib.sumOfPrimes(89,5) == false
    );
  });
  it("should return false if given is a negative number", function() {
    assert(
      lib.sumOfPrimes(-7) == false
    );
  });
  it("should return 381 if given 56 as your parameter", function() {
    assert(
      lib.sumOfPrimes(56) == 381
    );
  });
  it("should return false if given no parameter is given", function() {
    assert(
      lib.sumOfPrimes() == false
    );
  });
});