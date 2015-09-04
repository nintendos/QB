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
		alert(data);
			var p = data["HeWeather data service 3.0"][0];// w = JSON.stringify(p);//Key中包含非法字符时反序列化的另一种形式   " + p.now.cond.code + "
			var m = [
				{"name":"&#xe629;","value":100},
				{"name":"&#xe62a;","value":101},
				{"name":"&#xe632;","value":305},
				{"name":"&#xe644;","value":502},
				{"name":"&#xe62c;","value":300},
				{"name":"&#xe62b;","value":104},
				{"name":"&#xe62d;","value":302},
				{"name":"&#xe636;","value":400},
				{"name":"&#xe635;","value":407},
				{"name":"&#xe641;","value":501},
				{"name":"&#xe631;","value":404},
				{"name":"&#xe62f;","value":403},
				{"name":"&#xe633;","value":310},
				{"name":"&#xe63a;","value":306},
				{"name":"&#xe637;","value":402},
				{"name":"&#xe630;","value":307},
				{"name":"&#xe63b;","value":401},
				{"name":"&#xe634;","value":311},
				{"name":"&#xe63c;","value":312},
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

