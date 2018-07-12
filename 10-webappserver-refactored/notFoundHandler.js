module.exports = function(req, res, next){
	if (!res.finished){
		console.log('serving 404 from notFoundHandler');
		res.statusCode = 404;
		res.end();
	}
	next();
}