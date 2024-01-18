import Swiper from "swiper";
import { Pagination, EffectFade, Thumbs, Navigation } from "swiper/modules";
import $ from "jquery";

function remToPx(remValue) {
   // Получаем текущий базовый размер шрифта (font-size) из элемента <html>
   var htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

   // Переводим значение из rem в px
   var pxValue = remValue * htmlFontSize;

   // Округляем значение до целых пикселей (по желанию)
   return Math.round(pxValue) + "px";
}

const baner__info_swiper = new Swiper(".baner__info_swiper", {
   modules: [EffectFade],
   effect: "fade",
   fadeEffect: {
      crossFade: true,
   },
});

const baner__small_swiper = new Swiper(".baner__small_swiper", {
   direction: "horizontal",
   slidesPerView: 2,
   spaceBetween: `${remToPx(1.3)}rem`,
   watchSlidesProgress: true,
   breakpoints: {
      769: {
         direction: "vertical",
         slidesPerView: 3,
         spaceBetween: `${remToPx(1.4)}rem`,
      },
   },
});
if ($(".baner").length) {
   const fraction = document.querySelector(".baner__big_number_real");
   const fractionall = document.querySelector(".baner__big_number_all");
   const slideCount = $(".baner__big_swiper").find(".swiper-slide").length;
   fraction.textContent = `1`;
   fractionall.textContent = slideCount;
   const baner__big_swiper = new Swiper(".baner__big_swiper", {
      modules: [Pagination, Thumbs, Navigation],
      thumbs: {
         swiper: baner__small_swiper,
      },
      pagination: {
         el: ".baner__big_tab",
         clickable: true,
      },
      navigation: {
         nextEl: ".baner__big_right",
         prevEl: ".baner__big_left",
      },
      on: {
         slideChange: () => {
            fraction.textContent = baner__big_swiper.realIndex + 1;
         },
      },
   });

   baner__big_swiper.on("slideChange", function () {
      baner__info_swiper.slideTo(this.activeIndex, 2000);
   });
}

$(".like").on("click", function () {
   $(this).toggleClass("black");
});
