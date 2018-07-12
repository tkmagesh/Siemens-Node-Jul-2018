var http = require('http'),
	path = require('path'),
	dataParser = require('./dataParser'),
	serveStatic = require('./serveStatic'),
	serveCalculator = require('./serveCalculator'),
	notFoundHandler = require('./notFoundHandler'),
	logger = require('./logger'),
	app = require('./app'),
	chalk = require('chalk');

app.use(dataParser);
app.use(logger);
app.use(serveStatic(path.join(__dirname, '/public')));
app.use(serveCalculator);
app.use(notFoundHandler);

http.createServer(app).listen(8080);

console.log(chalk.red('server listening on port 8080!'));