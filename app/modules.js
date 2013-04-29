if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
    	this.newName = str2;
    	this.newGreeting = str1;
    	var self = this;

    	var module = (function () {
    		return {
	    		name: self.newName,
	    		greeting: self.newGreeting,
	    		sayIt: function () {
	    			return this.greeting + ', ' + this.name;
	    		}
    		};
    	})();

    	return module;
    }
  };
});

