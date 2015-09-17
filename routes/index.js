// var express = require('express');
// var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { pagetitle: '我的主页 - Quoteboard' });
// });

// module.exports = router;


module.exports = function(app){
	app.get('/', function(req, res, next) {
	  res.render('index', { pagetitle: '我的主页 - Quoteboard' });
	});
	app.get('/ib', function(req, res, next) {
	  res.render('ib', { pagetitle: '经纪商现券 - Quoteboard' });
	});
	app.get('/charts', function(req, res, next) {
	  res.render('charts', { pagetitle: '图表示例 - Quoteboard' });
	});
};
