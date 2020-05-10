/**
 * The is used to delete files
 */

var fs = require('fs');

fs.unlink('mynewFile.txt', function(err){
	if(err) throw err;
	console.log('file deleted');
}); 
