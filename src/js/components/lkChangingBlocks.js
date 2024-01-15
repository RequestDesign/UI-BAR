import $ from "jquery";
if($('.lk-tabs__row').length) {
   const tabsContainer = document.querySelector(".lk-tabs__row"),
   tabs = tabsContainer.querySelectorAll(".lk-tabs__item"),
   blocks = document.querySelectorAll(".lk-blocks__block");

   tabsContainer.addEventListener("click", (e) => {
      let target = e.target,
         blockName = "";

      if (target.classList.contains("lk-tabs__item")) {
         blockName = target.dataset.blockName;

         tabs.forEach((tab) => {
            tab.classList.remove("active");
         });

         target.classList.add("active");

         blocks.forEach((block) => {
            if (block.classList.contains(blockName)) {
               block.classList.add("active");
               return;
            }

            block.classList.remove("active");
         });
      }
   });
}

