'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sum_of_primes.js');

describe("Test that constants are computed properly", function() {
  it("should return 'Invalid input. A number was expected but a string was giving.' if 'str' is given", function() {
    assert(
      lib.sumOfPrimes('str') == "Invalid input. A number was expected but a string was giving."
    );
  });
  it("It should return 'Invalid input. A number was expected but an Object was giving.' if parameter given is an array", function() {
    assert(
      lib.sumOfPrimes([1,2,3]) == "Invalid input. A number was expected but an Object was giving."
    );
  });
  it("It should return 'Invalid input. A number was expected but an Object was giving.' if parameter given is an object", function() {
    assert(
      lib.sumOfPrimes({x:9}) == "Invalid input. A number was expected but an Object was giving."
    );
  });
  it("should give 17 if 10 is the given input", function() {
    assert(
      lib.sumOfPrimes(10) == 17
    );
  });
  it("should return a number as the result if given a valid number as an input", function() {
    assert(
      typeof(lib.sumOfPrimes(10)) == 'number'
    );
  });
  it("should return 'Invalid input. Input must be greater than 1' if parameter given is 0", function() {
    assert(
      lib.sumOfPrimes(0) == "Invalid input. Input must be greater than 1"
    );
  });
  it("should return 'Invalid input. Input must be greater than 1' if parameter given is 1", function() {
    assert(
      lib.sumOfPrimes(1) == "Invalid input. Input must be greater than 1"
    );
  });
  it("should return 2 if parameter given is 2", function() {
    assert(
      lib.sumOfPrimes(2) == 2
    );
  });
  it("should return 'Invalid input. Only one input is required' if number of parameters given is more than 1", function() {
    assert(
      lib.sumOfPrimes(89,5) == "Invalid input. Only one input is required"
    );
  });
  it("should return 'Invalid input. Input must be greater than 1' if given is a negative number", function() {
    assert(
      lib.sumOfPrimes(-7) == "Invalid input. Input must be greater than 1"
    );
  });
  it("should return 381 if given 56 as your parameter", function() {
    assert(
      lib.sumOfPrimes(56) == 381
    );
  });
  it("should return 'Invalid input. Only one input is required' if given no parameter is given", function() {
    assert(
      lib.sumOfPrimes() == "Invalid input. Only one input is required"
    );
  });
});