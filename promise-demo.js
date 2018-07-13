function addAsync(x,y){
	var promise = new Promise(function(resolveFn, rejectFn){
		setTimeout(function(){
			console.log('Add operation completed');
			resolveFn(x + y);
        },5000);
    });

	return promise;
}

function addClient(x,y){
	var p = addAsync(100,200);
	p.then(function(result){
		console.log(`result = ${result}`);
    });
}

//async await
async function addClient(x,y){
	var result = await addAsync(100,200);
	console.log(`result = ${result}`);
}