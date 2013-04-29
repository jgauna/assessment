if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    or : function(a, b) {
		var result = (a || b) ? true : false;
		return result;
    },

    and : function(a, b) {
		var result = (a && b) ? true : false;
		return result;
    }
  };
});
