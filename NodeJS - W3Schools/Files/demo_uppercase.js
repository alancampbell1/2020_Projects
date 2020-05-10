var http = require('http');
var uc   = require('upper-case');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	/**	Using our new package to converts	**/
	res.write(uc.upperCase("Hello World"));
	res.end();
}).listen(8080);