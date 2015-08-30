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

/////
})

////////////
function showSideBar(){
	$("#sideBar").toggleClass("show");
}
