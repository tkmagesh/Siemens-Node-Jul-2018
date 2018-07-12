var chalk = require('chalk');

module.exports = function(req, res, next){
	console.log(chalk.blue(req.method) + '\t' + chalk.green(req.urlObj.pathname));
	next();
}