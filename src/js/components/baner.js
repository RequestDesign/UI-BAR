import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const swiper = new Swiper('.baner__info_swiper', {
    loop: true,
    modules: [Pagination],
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});