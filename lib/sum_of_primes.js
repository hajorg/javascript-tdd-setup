// The derivative of a function y = f(x) is denoted as df(x)/d(x). For functions ax^n, the derivate is nax^(n-1). Write a function that calculates the coefficient and power of the derivate of a function ax^n where a and n are given.
'use strict'

module.exports = {
  sumOfPrimes: function(n) {
    //Checks the length of the parameters given
    if (arguments.length < 1 || arguments.length >= 2) {
      return false;
    } else {
      //checkes to see the data type of the parameter given
      if (typeof(n) === "number") {
        if (n <= 1) {
          return false;
        } else if (n === 2) {
          return n;
        } else {
          var primeSum = 0;
          for (var i = 2; i <= n; i++) {
            var prime = true;
            for (var j = 2; j < i; j++) {
              if (i%j === 0) {
                prime = false;
                break;
              }
            }
            if (prime === true) {
              primeSum += i;
            }
          }
          return primeSum;
        }
      } else {
        return false;
      }
    }
  }
}