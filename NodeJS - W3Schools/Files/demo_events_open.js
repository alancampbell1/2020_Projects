var fs = require('fs');

var readStream = fs.createReadStream('./demofile.txt');

/**	Writes to the console when opened	**/
readStream.on('open', function() {
	console.log('The file is opened');
});