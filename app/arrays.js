if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
		return arr.indexOf(item);
    },

    sum : function(arr) {
		var total = 0;
		for (var i = 0; i < arr.length; i++) {
			total += arr[i];
		}
		return total;
    },

    remove : function(arr, item) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] == item) {
				var rem = arr.splice(i, 1);
			}
		}
		return arr;
    },
    
    removeWithoutCopy : function(arr, item) {

    },

    append : function(arr, item) {

    },

    truncate : function(arr) {

    },

    concat : function(arr1, arr2) {

    },

    insert : function(arr, item, index) {

    },

    count : function(arr, item) {

    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
