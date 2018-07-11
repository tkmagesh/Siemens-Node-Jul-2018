var fs = require('fs'),
	processText = require('./processText');

fs.readFile('sample.txt', { encoding : 'utf8'}, processText);

