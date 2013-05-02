if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
		var fileArr = [];
		var dirs = [];

		processDir(data);

		function processDir(dir) {
			var i, len, file;
			var files = dir.files;

			dirs.push(dir.dir);

			for (i = 0; i < files.length; i++) {
				file = files[i];
				if (typeof file === 'string') {
					if (!dirName || dirs.indexOf(dirName) > -1) {
					  fileArr.push(files[i]);
					}
				} else {
					processDir(files[i]);
				}
			}

			dirs.pop();
		}

		return fileArr;
    },

    permute: function(arr) {
		var permArr = [],
		usedChars = [];
		function main(arr){
			var i, ch;
			for (i = 0; i < arr.length; i++) {
				ch = arr.splice(i, 1)[0];
				usedChars.push(ch);
				if (arr.length === 0) {
					permArr.push(usedChars.slice());
				}
				main(arr);
				arr.splice(i, 0, ch);
				usedChars.pop();
			}
			return permArr;
		}
		return main(arr);
    }
  };
});
