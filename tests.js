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
  
});