import $ from "jquery";

if ($(".adding__img").length) {
   $(".adding__img_input").each(function (inputElement) {
      const dropZoneElement = this.closest(".adding__img");
      const cover = $(dropZoneElement).hasClass("adding__cover");

      dropZoneElement.addEventListener("click", (e) => {
         if ($(dropZoneElement).find(".adding__cover__img").length) {
            e.preventDefault();
         }
         this.click();
      });

      this.addEventListener("change", (e) => {
         if (this.files.length) {
            if (cover) {
               addCover(dropZoneElement, this.files);
            } else {
               updateProgress(dropZoneElement, this.files);
            }
         }
      });

      dropZoneElement.addEventListener("dragover", (e) => {
         e.preventDefault();
      });
      dropZoneElement.addEventListener("drop", (e) => {
         e.preventDefault();

         if (e.dataTransfer.files.length) {
            this.files = e.dataTransfer.files;
            if (cover) {
               addCover(dropZoneElement, e.dataTransfer.files);
            } else {
               updateProgress(dropZoneElement, e.dataTransfer.files);
            }
         }
      });
   });

   function checkInputs() {
      const inputs = document.querySelectorAll("#requiredInput");

      for (let i = 0; i < inputs.length; i++) {
         if (inputs[i].value === "") {
            $(".adding").removeClass("adding__active");
            return;
         }
      }

      $(".adding").addClass("adding__active");
   }

   const inputs = document.querySelectorAll("#requiredInput");

   inputs.forEach((input) => {
      input.addEventListener("input", () => {
         checkInputs();
      });
   });

   function addCover(dropZoneElement, files) {
      let progressElements = dropZoneElement.nextElementSibling;

      Array.from(files).forEach((elem, id) => {
         let fileImgElement = document.createElement("img");
         fileImgElement.src = URL.createObjectURL(files[id]);

         const fileSvg = createSvg();

         progressElements = document.createElement("div");
         progressElements.classList.add("adding__cover__img");
         dropZoneElement.append(progressElements);

         progressElements.append(fileImgElement, fileSvg);
         fileSvg.addEventListener("click", () => {
            setTimeout(() => {
               progressElements.remove();
               findImg();
            }, 5);
         });
      });
   }

   function updateProgress(dropZoneElement, files) {
      let progressElements = dropZoneElement.nextElementSibling;

      Array.from(files).forEach((elem, id) => {
         let fileImgElement = document.createElement("img");
         fileImgElement.src = URL.createObjectURL(files[id]);

         const fileSvg = createSvg();

         progressElements = document.createElement("div");
         progressElements.classList.add("adding__item");
         dropZoneElement.before(progressElements);

         progressElements.append(fileImgElement, fileSvg);
         fileSvg.addEventListener("click", () => {
            setTimeout(() => {
               progressElements.remove();
               findImg();
            }, 5);
         });
      });
   }

   function createSvg() {
      const fileSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const iconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      const iconCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      fileSvg.setAttribute("fill", "none");
      fileSvg.setAttribute("viewBox", "0 0 48 48");
      fileSvg.setAttribute("width", "48");
      fileSvg.setAttribute("height", "48");
      fileSvg.classList.add("adding__cover__img_delete");

      iconCircle.setAttribute("cx", "24");
      iconCircle.setAttribute("cy", "24");
      iconCircle.setAttribute("r", "23.5");
      iconCircle.setAttribute("fill", "white");
      iconCircle.setAttribute("stroke", "#969696");

      iconPath.setAttribute(
         "d",
         "M18.6367 31.0011L16.9184 29.2828L22.8369 23.3643L16.9184 17.4458L18.4458 15.9185L24.3643 21.837L30.2827 15.9185L32.001 17.6368L26.0825 23.5552L32.001 29.4737L30.4737 31.0011L24.5552 25.0826L18.6367 31.0011Z"
      );
      iconPath.setAttribute("fill", "#2B2D30");

      fileSvg.append(iconCircle, iconPath);
      return fileSvg;
   }

   function findImg() {
      if (!$(".adding").find("img").length) {
         $(".adding").removeClass("adding__active");
      }
   }

   $(document).on("scroll", function () {
      var stickyMob = $(".adding__bottom_btn");
      fixedH(stickyMob);
   });

   function fixedH(item) {
      const sideHeight = item.height();
      const containerHeight = $(".adding__bottom_btn").closest(".adding__bottom").height();
      if ($(window).scrollTop() >= $(".adding__bottom").offset().top - $(window).height() + containerHeight) {
         item.removeClass("moved");
      } else {
         item.addClass("moved");
      }
   }

   $(".adding__content__placeholder").on("click", function () {
      if ($(this).closest(".adding__content__box").find("input").length) {
         $(this).closest(".adding__content__box").find("input").focus();
      } else {
         $(this).closest(".adding__content__box").find("textarea").focus();
      }
   });
   $("textarea").on("keyup", function () {
      $(this).siblings(".adding__content__placeholder").css("display", "none");
      if (!$(this).val().length) {
         $(this).siblings(".adding__content__placeholder").css("display", "block");
      }
   });
   $(".adding__input_tag").on("keyup", function () {
      $(this).siblings(".adding__content__placeholder").css("display", "none");
      if (!$(this).val().length && !$(".adding__tag").length) {
         $(this).siblings(".adding__content__placeholder").css("display", "block");
      }
   });
   $(".adding__input_tag").on("keypress", function (e) {
      if (e.which == 13) {
         $(this).val();

         const fileSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
         const iconPathOne = document.createElementNS("http://www.w3.org/2000/svg", "path");
         const iconPathTwo = document.createElementNS("http://www.w3.org/2000/svg", "path");
         fileSvg.setAttribute("fill", "none");
         fileSvg.setAttribute("viewBox", "0 0 16 16");
         fileSvg.setAttribute("width", "16");
         fileSvg.setAttribute("height", "16");

         iconPathOne.setAttribute("d", "M2.53516 5L12.9994 15.3173");
         iconPathOne.setAttribute("stroke", "white");
         iconPathOne.setAttribute("stroke-linecap", "round");
         iconPathOne.setAttribute("stroke-linejoin", "round");

         iconPathTwo.setAttribute("d", "M13 5L2.53575 15.3173");
         iconPathTwo.setAttribute("stroke", "white");
         iconPathTwo.setAttribute("stroke-linecap", "round");
         iconPathTwo.setAttribute("stroke-linejoin", "round");

         fileSvg.append(iconPathOne, iconPathTwo);

         const span = document.createElement("span");
         span.innerHTML = $(this).val();
         const tag = document.createElement("div");
         tag.classList.add("adding__tag");
         $(".adding__tags").append(tag);
         tag.append(span, fileSvg);
         fileSvg.addEventListener("click", () => {
            setTimeout(() => {
               tag.remove();
               if (!$(this).val().length && !$(".adding__tag").length) {
                  $(this).siblings(".adding__content__placeholder").css("display", "block");
               }
            }, 5);
         });

         $(this).val("");
      }
   });
}

$(document).ready(function () {
   $('[data-modal="info"]').on("click", (e) => {
      e.preventDefault();
      $(".modal-info").addClass("active");
   });
   $("[data-modal]").on("click", () => {
      $("body").addClass("lock");
   });
   $(".modal-back").on("click", closeModal);
   $(".modal-return").on("click", closeModal);
   $(".modal-exit").on("click", closeModal);

   function closeModal() {
      $(".modal").removeClass("active");
      $("body").removeClass("lock");
   }
});
