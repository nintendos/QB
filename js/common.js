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


$.ajax({
	url: "http://apis.baidu.com/heweather/weather/free?city=beijing",
	data: {},
	dataType :'json',
	type: "GET",
	beforeSend: function(xhr){xhr.setRequestHeader('apikey', '0e2fd8789611cfd7363f038a7244927f');},//这里设置header
	success: function(data) {
		 $.each(data, function() {
		 	alert(data[1].status);
			$('#feed-list').html(data.status);
		  });		
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

