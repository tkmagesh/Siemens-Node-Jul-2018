var querystring = require('querystring'),
	calculator = require('./calculator');

module.exports = function(req, res, next){
	var resourceName = req.urlObj.pathname;
	if (resourceName === '/calculator'){
		var data = req.method  === 'GET' ? req.queryData : req.bodyData;
		var op = data.op,
			n1 = parseInt(data.n1,10),
			n2 = parseInt(data.n2, 10);
		var result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
		next();
	} else {
		next();
	}
}