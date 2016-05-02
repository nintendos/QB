var express = require("express");
var app = express();
var http = require('http');
var qb = require('./db/qb_schema.js');

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


/*
 * GET home page.
 */




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
	  res.render('charts', { pagetitle: '图表 - Quoteboard', url:'charts' });
	});

	app.get('/ui-controls', function(req, res, next) {
	  res.render('ui-controls', { pagetitle: 'UI基本元素 - Quoteboard', url:'ui-controls' });
	});

	app.get('/motion', function(req, res, next) {
	  res.render('motion', { pagetitle: '动效 - Quoteboard', url:'motion' });
	});

	app.get('/tongji', function(req, res, next) {
		// var user = new qb.superbond({
		// 	  event_id: '123131',
		// 	  account: 'erwer',
		// 	  time: '2016-12-12',
		// 	  time_next: '2016-12-12',
		// 	  event_key: 'erwer',
		// 	  event_value: 'erwer',
		// 	  MainWindow:'2114',
		// 	  time_stay: '23214',
		// 	  func: 'erwer',
		// 	  func_last: 'erwer',
		// 	  cp: 'erwer',
		// 	  cp_type: 'erwer',
		// 	  city: 'erwer',

		// });
		// user.save();

		// result = qb.superbond.find({"$where":"this.event_key==this.event_key"});

		// var group = { firstField: "$time", secondField: "$time_next"};
		// 	result = qb.superbond.aggregate(
		// 		{"$project" :{group :1}},
		// 		{"$group":{"_id":group,"count":{"$sum":1}}},
		// 		{"$sort":{"count":-1}},
		// 		{"$limit":58}
		// 		);

//-------aggregate
			// var result = qb.superbond.aggregate([
			// { $group: { 
			// _id: { time: "$time", time: "$time_next" }, 
			// uniqueIds: { $addToSet: "$_id" },
			// count: { $sum: 1 } 
			// }}, 
			// { $match: { 
			// count: { $gt: 1 } 
			// }}
			// ]);
		 //  res.render('tongji', {
			//   	pagetitle: 'aaa',
		 //        status: 1,
		 //        datalist : result,
		 //        date : new Date()
		 //      });


//--------MapReduce实现
// map=function (){
//  emit({event_key:this.event_key,event_value:this.event_value},{count:1});
// }

// reduce=function (key,values){
// 	var cnt=0;   
// 	values.forEach(function(val){cnt+=val.count;});  
// 	return {"count":cnt};
// }

// qb.superbond.mapReduce(map,reduce,{out:"mr2"});



//MapReduce实现
map=function (){
 emit(this.account,{count:1})
}

reduce=function (key,values){
 var cnt=0;   
values.forEach(function(val){ cnt+=val.count;});  
return {"count":cnt};
}
//MR结果存到集合mr1
qb.superbond.mapReduce(map,reduce,{out:"mr2"});


qb.mr2.find(function(error, result){
		    if (error) {
		      res.send(error);
		    }else{
			// result = JSON.stringify(result);
		  res.render('tongji', {
			  	pagetitle: 'aaa',
		        status: 1,
		        datalist : result,
		        date : new Date()
		      });
		}
	});

		// qb.superbond.find(function(error, result){
		//     if (error) {
		//       res.send(error);
		//     }else{
		//       res.render('tongji', {
		// 	  	pagetitle: 'aaa',
		//         status: 1,
		//         datalist : result,
		//         date : new Date()
		//       });
		//     }
		//   });


	});


	app.get('/login', function(req, res, next) {
		var query = {user: req.body.user, password: req.body.password};
		qb.userlist.count(query, function(err, doc){ 
		if (doc==1) {
		  var findResult = qb.userlist.find(function(error, result){
		    if (error) {
		      res.send(error);
		    }else{
		      res.render('index', {
		        status: doc,
		        username : query.user,
		        adminlist : result,
		        date : new Date()
		      });
		    }
		  });
		}else{
		  res.render('index', {
		    status: doc,
		  });
		  //res.redirect('/');
		}
		});
	});


	app.get('/baidu', function(req, res, next) {
		var post_options = {
		host: 'api.baidu.com',
		// port: '8888',
		path: '/sem/common/HolmesLoginService',
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'UUID': 'E4-CE-8F-15-B0-80',
			'account_type': 1,
			}
		};

		var post_req = https.request(post_options, function (response) {

		});
		res.render('baidu', { pagetitle: '百度统计', url:'baidu' });
	});

	app.get('/popupWindow', function(req, res) {
	  var data = "发射成功!";
	  res.send(data); 
	  res.end();// 如果不执行end(), 那么前端网页则会一直等待response
	});
		

};



