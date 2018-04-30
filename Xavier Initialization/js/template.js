$(window).load(function() {
	$(".index").click(function() {	
		var target = $(this).attr('class').split(' ').pop();
			target = $("."+target+"-target");
		toSection($(target));
	});

	$(".footnote-index").click(function() {	
		var target = $(this).attr('class').split(' ').pop();
			target = $("."+target+"-target");
		toSection($(target));
	});

	$(".reference > li").click(function(){
		var target = $(this).attr('class');
			target = target.split("-");
			
			target = "."+target[0]+"-"+target[1];
			console.log(target);
		toSection($(target));
	})

	marginSetup();
	backToTopButton();
	backToTop();
});


function toSection(section) {
    var n = section.offset().top;
    var pos = { 'scrollTop': n }
    $('html,body').animate(pos, 'slow');
}

$.fn.inView = function() {
	// element top/bottom
	var eTop = $(this).offset().top,
		eBottom = eTop + $(this).outerHeight();
	// viewport top/bottom
	var vTop = $(window).scrollTop(),
		vBottom = vTop + $(window).height();
	// check if any section of element in view
	return eBottom > vTop && eTop < vBottom;
};


function marginSetup(){

	// vertically align margin body with anchor

	$(".marginbody").each(function(){
		var number = $(this).data("number"),
			anchor = $("#margin-" + number + "-anchor"),
			height = $(this).outerHeight(),
			style = {'top': 0, 'middle': height / 2, 'bottom': height},
			align = anchor.data("align"),
			parent = anchor.parents('div').eq(0),
			offset = anchor.position().top - parent.position().top - style[align];
		$(this).css('top', offset + 'px');
	});

	// add highlight on mouseenter
	$(".marginanchor").mouseenter(function(){
		var number = $(this).data("number"),
			body = $("#margin-" + number + "-body");
		body.addClass("margin-border");
	})

	// remove highlight on mouseleave
	$(".marginanchor").mouseleave(function(){
		var number = $(this).data("number"),
			body = $("#margin-" + number + "-body");
		body.removeClass("margin-border");

	})
}

function backToTopButton(){
	var section1_pos = $(".index1-target").offset().top;
	var show_pos = [section1_pos];
	var hide_pos = [0];

	$( ".full-container" ).each(function( index ) {
	   var pos = $(this).offset().top-$(window).height()/2;
	   hide_pos.push(pos);

	   pos = pos + $(this).height()+$(window).height()/2;
	   show_pos.push(pos);
	});

	$(window).scroll(function(){
	    var scrollPos = $(document).scrollTop();

	    var i;
	     var num = 0;
	    for (i=0; i < show_pos.length;i++ ){    	
	    	if((scrollPos>=hide_pos[i])&&(scrollPos < show_pos[i])){
	    		num = num+1;

	    	}

	    }

	    if(num!==0){
	    	$(".backToTop").css({"display":"none"});
	    }else{
	    	$(".backToTop").css({"display":"block"});
	    }
	});
	console.log(show_pos,hide_pos);
}

function backToTop(){
	$(".backToTop").click(function() {
		$('html,body').animate( { 'scrollTop': 0 }, 'slow');
		console.log("clicke");
	})
}



