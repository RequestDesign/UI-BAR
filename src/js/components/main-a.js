"use strict";
import $ from "jquery";

let scrollY = 0;

function openModal() {
  scrollY = window.scrollY;
  const body = document.body;
  body.style.height = "100vh";
  body.style.overflowY = "hidden";
  if (window.innerWidth > 768) {
    body.style.paddingRight = "15px";
  }
}

function closeModal() {
  const body = document.body;
  body.style.position = "";
  body.style.top = "";
  body.style.height = "";
  body.style.overflowY = "";
  body.style.paddingRight = "";
  window.history.replaceState(
    null,
    null,
    window.location.pathname + window.location.search,
  );
  window.scrollTo(0, scrollY);
}

$(function () {
  if ($(window).width() > 768) {
    $('.statia-aside.modal').hide();

    if($('.statia-aside.modal').length) {
      setTimeout(function () {
        $('.statia-aside.modal').show();
        $('.statia-aside.modal').addClass('active');
        openModal();
      }, 6000);
    }

    $('.statia-aside__close').on('click', function () {
      if ($('.statia-aside.modal').is(":visible")) {
        $('.statia-aside.modal').removeClass('active');
        closeModal();
        setTimeout(function () {
          $('.statia-aside.modal').hide();
        }, 500)
      } else {
        $('.statia-aside.left').addClass('hide');
        $('.statia-aside.left').hide();
      }
    });
  }
  if ($(window).width() < 769) { 
    $('.statia-aside__close').on('click', function () {
      $(this).closest('.statia-aside').slideUp();
    });
  }
});