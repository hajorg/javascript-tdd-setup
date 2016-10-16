'use strict'

module.exports = {
  sumOfPrimes: function(n) {
    //Checks the length of the parameters given
    if (arguments.length < 1 || arguments.length >= 2) {
      return "Invalid input. Only one input is required";
    } else {
      //checkes to see the data type of the parameter given
      if (typeof(n) === "number") {
        if (n <= 1) {
          return "Invalid input. Input must be greater than 1";
        }
        else if (n === 2) {
          return n;
        } 
        else {
          var primeSum = 0;
          for (var i = 2; i <= n; i++) {
            if (this.isPrime(i)) {
              primeSum += i;
            }
          }
          return primeSum;
        }
      } 
      else {
        return this.errorMessage(n);
      }
    }
  },
  isPrime: function (number) {
    for (var j = 2; j < number; j++) {
      if (number%j === 0) {
        return false;
      }
    }
    return true;
  },
  errorMessage: function (value) {
    switch (typeof(value)) {
      case "string":
        return "Invalid input. A number was expected but a string was giving.";
      case "object":
        return "Invalid input. A number was expected but an Object was giving.";
      default:
        return "Invalid input";
    }
  }
}