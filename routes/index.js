// var express = require('express');
// var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { pagetitle: '我的主页 - Quoteboard' });
// });

// module.exports = router;


module.exports = function(app){
	app.get('/', function(req, res, next) {
	  res.render('index', { pagetitle: '我的主页 - Quoteboard', url:'' });
	});
	app.get('/ib', function(req, res, next) {
	  res.render('ib', { pagetitle: '经纪商现券 - Quoteboard', url:'ib' });
	});
	app.get('/charts', function(req, res, next) {
	  res.render('charts', { pagetitle: '图表示例 - Quoteboard', url:'charts' });
	});
	app.get('/ui-controls', function(req, res, next) {
	  res.render('ui-controls', { pagetitle: 'UI元素 - Quoteboard', url:'ui-controls' });
	});
	app.get('/motion', function(req, res, next) {
	  res.render('motion', { pagetitle: '动效示例 - Quoteboard', url:'motion' });
	});
};
