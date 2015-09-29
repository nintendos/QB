var express = require("express");
var app = express();
var http = require('http');
// var https = require('https');
// var express = require('express');
// var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { pagetitle: '我的主页 - Quoteboard' });
// });

// module.exports = router;


module.exports = function(app){
	app.get('/', function(req, res, next) {

	// var post_options = {
	//     host: '127.0.0.1'
	//     port: '8888',
	//     path: '/api/list',
	//     method: 'POST',
	//     headers: {
	//       'Content-Type': 'application/x-www-form-urlencoded',
	//       'Content-Length': reqData.length
	//     }
	//   };

	// var getWeatherInfo = function(callback){
		//http://apis.baidu.com/heweather/weather/free?city=shanghai&apikey=0e2fd8789611cfd7363f038a7244927f
	   var getWeatherInfo = http.get("http://api.heweather.com/x3/weather?cityid=shanghai&key=b66e0d0a5a494ca59cf62b644558f35c", function(res){
	        res.on("data",function(data){
	            // data = JSON.stringify(data);
	            data = JSON.parse(data);
	            // callback(data);
	            // console.log( data["HeWeather data service 3.0"][0] );

	            // return data;
	        });
	    }); 
	// };
	var weather = getWeatherInfo;

	  res.render('index', { pagetitle: '我的主页 - Quoteboard', url:'', weather: weather });
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



/**
 * 获取天气数据.
 */

// exports.getWeatherInfo = getWeatherInfo;


// http.createServer(function (request, response) {
    // var ip = URL.parse(request.url, true).query.ip;
    // if(ip){ //有参数请求
    //     weather.getIpInfo(ip, function(cityinfo){
    //         var cityid = weather.getCityId(cityinfo[0], cityinfo[1]);
    //         weather.getWeatherInfo(cityid, function(weatherinfo){
    //             response.writeHead(200, {"Content-Type": "text/html;charset:utf-8"});
    //             response.write(JSON.stringify(weatherinfo));
    //             response.end();
    //         });
    //     });
    // }else{  //无参数请求
        // ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress || request.socket.remoteAddress || request.connection.socket.remoteAddress;
        // weather.getIpInfo(ip, function(cityinfo){
            // var cityid = weather.getCityId(cityinfo[0], cityinfo[1]);
            // getWeatherInfo(function(weatherinfo){
            //     var weatherinfo = weatherinfo.weatherinfo;
            //     var html = "<html>" +
            //                                "<head>" +　
            //                "<meta charset='utf-8'/>" + 
            //                "<title>天气</title>" + 
            //            "<style>*{font-family: arial, helvetica, sans-serif; font-size: 12px; color: rgb(153, 153, 153);}</style>" +
            //            "</head>" + 
            //            "<body>" + 
            //            weatherinfo.city + ": " + 
            //            weatherinfo.temp2 + "~" + weatherinfo.temp1 + " " + 
            //            weatherinfo.weather + 
            //            " (更新时间: " + weatherinfo.ptime + ")" + 
            //            "</body>" + 
            //            "</html>";
            //     response.writeHead(200, {"Content-Type": "text/html"});
            //     response.write(html);
            //     response.end();
            // });
        // });
    // }
//     console.log(ip);
// }).listen(1081);