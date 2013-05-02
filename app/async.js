if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
		var dfd = $.Deferred();
		
		setTimeout(function() {
			dfd.resolve(value);
		}, 100);
		
		return dfd.promise();
    },

    manipulateRemoteData : function(url) {
		var arr = [];
		var dfd = $.Deferred();

		$.ajax(url).then(function(data) {
			$.each(data.people, function(i, value){
				arr.push(value.name);
			});
			
			dfd.resolve(arr.sort());
		});

		return dfd.promise();
    }
  };
});
