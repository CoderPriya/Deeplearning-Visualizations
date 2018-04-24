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

	marginSetup();
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
			parent = anchor.parent().parent(),
			offset = anchor.position().top - parent.position().top - height / 2;
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


