import $ from "jquery";

$(document).ready(function(){
	$('.header__burger').click(function(){
		$('body').toggleClass('lock');
        $(this).parents('.container').toggleClass('active')
	});

	// $(window).scroll(function () {
	// 	var scrollPosition = $(window).scrollTop()

	// 	if(scrollPosition > 0) {
	// 		$('.header').addClass('on-top')
	// 	} else {
	// 		$('.header').removeClass('on-top')
	// 	}
	// })

});
  