var http = require('http');	//get the HTTP module
var url  = require('url');	//get the URL Module
var fs   = require('fs');	//get the File System Module


//Creating the Server
http.createServer (function (req, res){

    var q = url.parse(req.url, true);	//Gets the URL - returns an object
    console.log(q);
    var filename = "." + q.pathname; 	//Gets the file path and adds a '.'
    console.log('filename: ' + filename); //Prints: ./winter.html

	fs.readFile(filename, function(err, data){
		if(err){
			res.writeHead(404, {'Content-Type': 'text/html'});
			return res.end("404 Not Found");
		}
        //Prints the content to the user
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.end();
	});
}).listen(8080);

/**
 * When 'q' is returned on summer.html
  Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: [Object: null prototype] {},
  pathname: '/summer',
  path: '/summer',
  href: '/summer'
}
 */

