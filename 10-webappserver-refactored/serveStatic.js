var fs = require('fs'),
	path = require('path');
	
var staticResExtns = ['.html', '.js', '.css', '.xml', '.json', '.png', '.jpg', '.ico', '.txt'];

function isStatic(resourceName){
	return staticResExtns.indexOf(path.extname(resourceName)) !== -1;
}

module.exports = function(resourcePath){
	return function(req, res,  next){
		var resourceName = req.urlObj.pathname === '/' ? 'index.html' : req.urlObj.pathname;
		var resourceFullName = path.join(resourcePath, resourceName);
		if (isStatic(resourceFullName) && fs.existsSync(resourceFullName)){
			var stream = fs.createReadStream(resourceFullName);
			stream.pipe(res);
			stream.on('end', function(){
				next();
			});
		} else {
			next();
		}
	};
};