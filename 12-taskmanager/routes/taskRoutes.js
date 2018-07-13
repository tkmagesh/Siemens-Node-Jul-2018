var express = require('express');
var router = express.Router();

var taskList = [
	{id : 1, name : 'Master Node.js', isCompleted : false},
	{id : 2, name : 'Watch match highlights', isCompleted : true}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('task/index', { tasks : taskList });
});

router.get('/api', function(req, res, next) {
  res.json({tasks : taskList});
});

router.get('/add', function(req, res, next){
	res.render('task/add');
});

router.post('/add', function(req, res, next){
	var newTaskName = req.body.newTaskName;
	var newTaskId = taskList.reduce(function(result, task){
		return result > task.id ? result : task.id;
	}, 0) + 1;
	var newTask = {
		id : newTaskId,
		name : newTaskName,
		isCompleted : false
	};
	taskList.push(newTask);
	res.redirect('/tasks');
});

router.post('/api/add', function(req, res, next){
	var newTaskName = req.body.newTaskName;
	var newTaskId = taskList.reduce(function(result, task){
		return result > task.id ? result : task.id;
	}, 0) + 1;
	var newTask = {
		id : newTaskId,
		name : newTaskName,
		isCompleted : false
	};
	taskList.push(newTask);
	res.status(201).json(newTask);
});

module.exports = router;
