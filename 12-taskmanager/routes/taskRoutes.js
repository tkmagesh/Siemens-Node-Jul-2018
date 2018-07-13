var express = require('express');
var router = express.Router();
var taskService = require('../services/taskService');


/* GET home page. */
router.get('/', function(req, res, next) {
	var taskList = taskService.getAll();
  res.render('task/index', { tasks : taskList });
});

router.get('/add', function(req, res, next){
	res.render('task/add');
});

router.post('/add', function(req, res, next){
	var newTaskName = req.body.newTaskName;
	taskService.addNew(newTaskName)
	res.redirect('/tasks');
});



module.exports = router;
