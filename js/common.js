/* SUMSCOPE Common Javascript
 * Created: 2015-08-26
 * Update: ----
 * Author: JollyJ
 * Copyright: SUMSCOPE
 */


$(function() {


	$("input[type=text]").focus(function(){
		$(this).addClass("focus");
	});
	$("input[type=text]").blur(function(){
		$(this).removeClass("focus");
	});
	$("input[type=text]").hover(
		function(){
			if($(this).is(":focus")==false){$(this).addClass("hover");}
		},
		function(){
			if($(this).is(":focus")==false){$(this).removeClass("hover");}
		}
	);
	$("input.btn").hover(
		function(){
			$(this).addClass("hover");
		},
		function(){
			$(this).removeClass("hover");
		}
	);

	//Resize Canvas
	function resizeCanvas()
	{
		var pw = $(window).width();
		var ph = $(window).height();
		var sw = $("#sideBar").width();

		$("#content").css("width",pw);
		$("#content").css("height",ph);
		$("#sideBar").css("height",ph);
	}
	resizeCanvas();
	$(window).resize(function(){resizeCanvas();});

	//Main Nav Dropdown
	// alert($(".mainNav").offset().left);
	$(".mainNav .dropdown-menu").css({
		"width":$(window).width()-$(".mainNav").offset().left,
		"left":-$(".mainNav").offset().left
	});

	//Function List Transition
	$(".funcIcon").hover(
		function(){
			$(this).addClass("funcTrans")
		},
		function(){
			$(this).removeClass("funcTrans")
		}
		);

//天气
$.ajax({
	url: "http://apis.baidu.com/heweather/weather/free?city=shanghai",
	type: "GET",
	beforeSend: function(xhr){xhr.setRequestHeader('apikey', '0e2fd8789611cfd7363f038a7244927f');},//这里设置header
	success: function(data) {
			var p = data["HeWeather data service 3.0"][0];// w = JSON.stringify(p);//Key中包含非法字符时反序列化的另一种形式   " + p.now.cond.code + "
			var m = [
				{"name":"&#xe603;","value":100,"cname":"晴"},
				{"name":"&#xe604;","value":101,"cname":"多云"},
				{"name":"&#xe60c;","value":305,"cname":"小雨"},
				{"name":"&#xe61b;","value":502,"cname":"霾"},
				{"name":"&#xe606;","value":300,"cname":"阵雨"},
				{"name":"&#xe605;","value":104,"cname":"阴"},
				{"name":"&#xe607;","value":302,"cname":"雷阵雨"},
				{"name":"&#xe610;","value":400,"cname":"小雪"},
				{"name":"&#xe60f;","value":407,"cname":"阵雪"},
				{"name":"&#xe618;","value":501,"cname":"雾"},
				{"name":"&#xe60b;","value":404,"cname":"雨夹雪"},
				{"name":"&#xe609;","value":403,"cname":"暴雪"},
				{"name":"&#xe60d;","value":310,"cname":"暴雨"},
				{"name":"&#xe614;","value":306,"cname":"中雨"},
				{"name":"&#xe611;","value":402,"cname":"大雪"},
				{"name":"&#xe60a;","value":307,"cname":"大雨"},
				{"name":"&#xe615;","value":401,"cname":"中雪"},
				{"name":"&#xe60e;","value":311,"cname":"大暴雨"},
				{"name":"&#xe616;","value":312,"cname":"特大暴雨"},
			];
			$.each(m, function(index,item){
				if(item.value == p.now.cond.code){
					n = item.name;
					return false;
				}
			});
			$('#weather').html("<div class='weatherIcon'><i class='glyphicon'>" + n + "</i></div><div class='weatherTmp'>" + p.now.tmp + "℃</div><div class='clearfix'></div><div class='weatherCond'><span>"+ p.now.cond.txt +"</span>&nbsp;&nbsp;<span>" + p.aqi.city.qlty + "</span></div>");

	}
});

})

////////////
// function showSideBar(){
// 	$("#sideBar").toggleClass("show");
// }

// request('http://www.ibm.com/developerworks/cn/views/global/rss/libraryview.jsp', {
//     handleAs: 'xml'
// }).then(function(data){
//     var items = data.getElementsByTagName('item');

//     for (var i = 0; i < items.length; i++) {
//         var item = items[i];
//         var children = item.children;
//         var title = children[0].textContent;
//         var description = children[1].textContent;
//         var link = children[2].textContent;
//         var pubdate = new Date(Date.parse(children[3].textContent));
//         var feed = domConstruct.toDom([
//             '<div class="feed">',
//                 '<h4><a href="', link, '" target="_blank">', title, '</a></h4>',
//                 '<p>内容概要： ', description, '</p>',
//                 '<div>发布时间： ', locale.format(pubdate), '</div>',
//             '</div>'
//         ].join(''));

//         dom.byId('feed-list').appendChild(feed);
//     }
// });

