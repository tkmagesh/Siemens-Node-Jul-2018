var http = require('http'),
	fs = require('fs'),
	path = require('path'),
	url = require('url');

var server = http.createServer(function(req, res){
	var urlObj = url.parse(req.url),
		resourceName = urlObj.pathname === '/' ? 'index.html' : urlObj.pathname,
		resourceFullName = path.join(__dirname, resourceName);
		
	if (!fs.existsSync(resourceFullName)){
		res.statusCode = 404;
		res.end();
		return;
	}
	fs.createReadStream(resourceFullName).pipe(res);
});

server.listen(8080);