var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', currentTime : new Date() });
});

router.get('/api', function(req, res, next){
	res.json({ title: 'Express', currentTime : new Date() });
})
module.exports = router;
