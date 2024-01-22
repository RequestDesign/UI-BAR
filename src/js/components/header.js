import $ from "jquery";

$(document).ready(function () {
   $(".header__burger").click(function () {
      $("body").addClass("lock");
      $(this).parents(".container").addClass("active");
   });

   $(".header__menu-close").click(function () {
      $("body").removeClass("lock");
      $(this).parents(".container").removeClass("active");
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
