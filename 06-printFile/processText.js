module.exports = function(err, fileContents){
	if (err){
		console.log(err);
		return;
	}
	console.log(fileContents);	
}