var taskList = [
	{id : 1, name : 'Master Node.js', isCompleted : false},
	{id : 2, name : 'Watch match highlights', isCompleted : true}
];

function getAll(){
	return [...taskList];
}

/*
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

function partialUpdate(id, taskData){
	taskList = taskList.map(function(task){
		return task.id === id ? {...task, ...taskData} : task;
	});
	return taskList.find(function(task){
		return task.id === id;
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
	remove : remove,
	partialUpdate : partialUpdate
};
*/

/*function addNew(newTaskName){
	var newTaskId = taskList.reduce((result, task) => result > task.id ? result : task.id, 0) + 1;
	var newTask = {
		id : newTaskId,
		name : newTaskName,
		isCompleted : false
	};
	taskList.push(newTask);
	return newTask;
}

function update(id, updatedTask){
	taskList = taskList.map(task => task.id === id ? updatedTask : task );
}

function partialUpdate(id, taskData){
	taskList = taskList.map( task => task.id === id ? {...task, ...taskData} : task);
	return taskList.find(task =>  task.id === id);
}

function remove(id){
	taskList = taskList.filter(task => task.id !== id);
}*/

class TaskService {  
	constructor(){
		this.taskList = [
			{id : 1, name : 'Master Node.js', isCompleted : false},
			{id : 2, name : 'Watch match highlights', isCompleted : true}
		];
	}
	getAll(){
		return [...this.taskList];
	}
	addNew(newTaskName){
		var newTaskId = this.taskList.reduce((result, task) => result > task.id ? result : task.id, 0) + 1;
		var newTask = {
			id : newTaskId,
			name : newTaskName,
			isCompleted : false
		};
		this.taskList.push(newTask);
		return newTask;
	}

	update(id, updatedTask){
		this.taskList = this.taskList.map(task => task.id === id ? updatedTask : task );
	}

	partialUpdate(id, taskData){
		this.taskList = this.taskList.map( task => task.id === id ? {...task, ...taskData} : task);
		return this.taskList.find(task =>  task.id === id);
	}

	remove(id){
		this.taskList = this.taskList.filter(task => task.id !== id);
	}
}

module.exports = new TaskService();



