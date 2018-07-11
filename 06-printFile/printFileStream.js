var fs = require('fs');

var stream = fs.createReadStream('calculatorData.dat', { encoding : 'utf8'});

//events -> open, data, end, close, error

stream.on('open', function(){
	console.log('file opened for reading');
});

var readCount  = 0;
stream.on('data', function(chunk){
	++readCount;
	console.log(chunk);
});

stream.on('end', function(){
	console.log('end of file reached');
});

stream.on('close', function(){
	console.log('file closed');
	console.log('read operation completed with ' + readCount + ' chunks');
});

stream.on('error', function(err){
	console.log('something went wrong ', err);
});



