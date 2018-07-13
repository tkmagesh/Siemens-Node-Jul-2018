var express = require('express');
var router = express.Router();
var taskService = require('../services/taskService');


/* GET home page. */

router.get('/', function(req, res, next) {
	var taskList = taskService.getAll();
  res.json({tasks : taskList});
});

router.post('/', function(req, res, next){
	var newTaskName = req.newTaskName;
	var newTask = taskService.addNew(newTaskName);
	res.status(201).json(newTask);
});

router.put('/:id', function(req, res, next){
	var updatedTask = req.body;
	taskService.update(parseInt(req.params.id,10), updatedTask);
	res.status(200).json(updatedTask);
});

router.delete('/:id', function(req, res, next){
	console.log(req.params);
	taskService.remove(parseInt(req.params.id, 10));
	res.status(200).json({});
});


module.exports = router;
