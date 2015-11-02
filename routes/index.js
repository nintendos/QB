var express = require("express");
var app = express();
var http = require('http');
// var ipc = require('ipc');
// var qm = require('../electron/qm.js');
// var https = require('https');
// var express = require('express');
// var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { pagetitle: '我的主页 - Quoteboard' });
// });

// module.exports = router;




module.exports = function(app){
		//http://api.heweather.com/x3/weather?cityid=CN101020100&key=b66e0d0a5a494ca59cf62b644558f35c //经常因乱码无法正常获取
		//http://apis.baidu.com/heweather/weather/free?city=shanghai&apikey=0e2fd8789611cfd7363f038a7244927f
		// http.get("http://api.heweather.com/x3/weather?cityid=CN101020100&key=b66e0d0a5a494ca59cf62b644558f35c", function(response){
		        // "Content-Length": Buffer.byteLength(data, 'utf8'),

	app.get('/', function(req, res, next) {
		var w = '';
		// http.get({
		// 	hostname:'apis.baidu.com',
		// 	port:'80',
		// 	path: '/heweather/weather/free?city=shanghai',
		//     method: 'GET',
		//     headers: {
		//         'Content-Type': 'application/json; charset=utf-8',
		//         'apikey': '0e2fd8789611cfd7363f038a7244927f'
		//     }
		// }, function(response){
	 //        response.on("data",function(data){
	 //        	w = data;
  //           	response.on('end', next);
	 //        });
	 //    }); 
		// function next(){
		  res.render('index', { pagetitle: '我的主页 - Quoteboard', url:'', weather: w });
		  // }

	});

	app.get('/ib', function(req, res, next) {
	  res.render('ib', { pagetitle: '经纪商现券 - Quoteboard', url:'ib' });
	});

	app.get('/qm', function(req, res, next) {
	  res.render('qm', { pagetitle: 'Messenger - Quoteboard', url:'qm' });
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

	app.get('/popupWindow', function(req, res) {
	  var data = "发射成功!";
	  res.send(data); 
	  res.end();// 如果不执行end(), 那么前端网页则会一直等待response
	});
		

};



