if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
		return 1 & (num >> (bit - 1));
    },

    base10: function(str) {
		return parseInt(str, 2);
    },

    convertToBinary: function(num) {
		num = parseInt(num, 10);
		return ("00000000" + num.toString(2)).slice(-8);
    },

    multiply: function(a, b) {
		var zeros = b.toString().split('.');
		var result = a * b;
		return parseFloat(result.toFixed(zeros[1].length));
    }
  };
});

