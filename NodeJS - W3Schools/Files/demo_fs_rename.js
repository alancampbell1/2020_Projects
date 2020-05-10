var fs = require('fs');

fs.rename('myNewFile1.txt', 'myRenameFile.txt', function(err){

	if(err) throw err;
	console.log('File Renamed');

});
