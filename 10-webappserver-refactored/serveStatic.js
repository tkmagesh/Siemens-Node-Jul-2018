var fs = require('fs'),
	path = require('path');
	
var staticResExtns = ['.html', '.js', '.css', '.xml', '.json', '.png', '.jpg', '.ico', '.txt'];

function isStatic(resourceName){
	return staticResExtns.indexOf(path.extname(resourceName)) !== -1;
}

module.exports = function(req, res){
	var resourceName = req.urlObj.pathname === '/' ? 'index.html' : req.urlObj.pathname;

	if (isStatic(resourceName)){
		var resourceFullName = path.join(__dirname, resourceName);
		if (!fs.existsSync(resourceFullName)){
			res.statusCode = 404;
			res.end();
			return;
		}
		fs.createReadStream(resourceFullName).pipe(res);
	}
} 