var taskList = [
	{id : 1, name : 'Master Node.js', isCompleted : false},
	{id : 2, name : 'Watch match highlights', isCompleted : true}
];

function getAll(){
	return taskList.concat([]);
}

function addNew(newTaskName){
	var newTaskId = taskList.reduce(function(result, task){
		return result > task.id ? result : task.id;
	}, 0) + 1;
	var newTask = {
		id : newTaskId,
		name : newTaskName,
		isCompleted : false
	};
	taskList.push(newTask);
	return newTask;
}

function update(id, updatedTask){
	taskList = taskList.map(function(task){
		return (task.id === id) ? updatedTask : task;
	});
}

function remove(id){
	taskList = taskList.filter(function(task){
		return task.id !== id;
	});
	console.log(taskList);
}


module.exports = {
	getAll : getAll,
	addNew : addNew,
	update : update,
	remove : remove
};


