var querystring = require('querystring'),
	calculator = require('./calculator');

module.exports = function(req, res){
	var resourceName = req.urlObj.pathname;
	if (resourceName === '/calculator' && req.method === 'GET'){
		var queryData = req.queryData;
		var op = queryData.op,
			n1 = parseInt(queryData.n1,10),
			n2 = parseInt(queryData.n2, 10);
		var result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
	} else if (resourceName === '/calculator' && req.method === 'POST'){
		var rawData = '';
		req.on('data', function(chunk){
			rawData += chunk;
		});
		req.on('end', function(){
			var bodyData = querystring.parse(rawData);
			var op = bodyData.op,
				n1 = parseInt(bodyData.n1,10),
				n2 = parseInt(bodyData.n2, 10);
			var result = calculator[op](n1, n2);
			res.write(result.toString());
			res.end();
		});
	}
}