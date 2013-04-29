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
		arr.sort();
		for (var i = arr.length; i--;) {
			if (arr[i] === item) {
				arr.splice(i, 1);
			}
		}
		return arr;
    },

    append : function(arr, item) {
		arr.push(item);
		return arr;
    },

    truncate : function(arr) {
		arr.splice(-1);
		return arr;
    },

    concat : function(arr1, arr2) {
		arr1 = arr1.concat(arr2);
		return arr1;
    },

    insert : function(arr, item, index) {
		arr.splice(index, 0, item); 
		return arr;
    },

    count : function(arr, item) {
		var result = 0;
		for (var i in arr) {
			if(arr[i] === item) {
				result++;
			}
		}
		return result;
    },

    duplicates : function(arr) {
		arr.sort();
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === arr[i+1]) {
				arr.splice(i, i+1);
			} else if (arr[i] !== arr[i+1]) {
				arr.splice(i, i);
			}
		}
		return arr;
    },

    square : function(arr) {
		for (var i = 0; i < arr.length; i++) {
			arr[i] = Math.pow(arr[i],2);
		}
		return arr;
    },

    findAllOccurrences : function(arr, target) {
		return arr;
    }
  };
});
