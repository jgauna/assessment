if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
		var pattern = /[0-9]/g;
		var result = (str.match(pattern)) ? true : false;
		return result;
    },

    containsRepeatingLetter : function(str) {
		var pattern = /([a-z])\1/gi;
		var result = (str.match(pattern)) ? true : false;
		return result;
    },

    endsWithVowel : function(str) {
		var pattern = /[a,e,i,o,u]$/i;
		var result = (str.match(pattern)) ? true : false;
		return result;
    },

    captureThreeNumbers : function(str) {
		var pattern = /([0-9]){3}/gi;
		var rst = (str.match(pattern));		
		var result = (!rst) ? false : rst[0];

		return result;
    },

    matchesPattern : function(str) {
		var pattern = /(\b\d{3}\b)-(\b\d{3}\b)-(\b\d{4}\b)/g;
		var result = (str.match(pattern)) ? true : false;
		return result;
    },
    isUSD : function(str) {
		var pattern = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/;
		var result = (str.match(pattern)) ? true : false;
		return result;
    }
  };
});
