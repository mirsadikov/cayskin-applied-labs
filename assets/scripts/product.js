import { renderProducts, createProductCarousel } from './products-list.js';
import { products } from './data.js';

const productsContainer = document.querySelector('.products__list');

window.addEventListener('DOMContentLoaded', () => {
  // Images carousel
  var swiper = new Swiper('.mySwiper1', {
    spaceBetween: 8,
    grabCursor: true,
    slidesPerView: 'auto',
    mousewheel: {
      releaseOnEdges: true,
    },
    breakpoints: {
      601: {
        direction: 'vertical',
        autoHeight: true,
        navigation: false,
      },
      901: {
        direction: 'horizontal',
        mousewheel: false,
      },
      1201: {
        direction: 'vertical',
        autoHeight: true,
        navigation: false,
      },
    },
  });
  var swiper2 = new Swiper('.mySwiper2', {
    spaceBetween: 10,
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: '.mySwiper2__nav-right',
      prevEl: '.mySwiper2__nav-left',
    },
    thumbs: {
      swiper: swiper,
    },
    breakpoints: {
      0: {
        pagination: {
          el: '.mySwiper2__dots',
          type: 'bullets',
          clickable: true,
        },
      },
      901: {
        pagination: false,
      },
    },
  });

  //   Products carousel
  renderProducts(products, productsContainer);
  createProductCarousel(
    '.products__list',
    '.products__nav-left',
    '.products__nav-right',
  );

  // results carousel
  const resultsContainer = $('.results__list');
  resultsContainer.owlCarousel({
    dots: false,
    lazyLoad: true,
    responsive: {
      0: {
        margin: 8,
        autoWidth: true,
      },
      451: {
        margin: 8,
        autoWidth: false,
        items: 2,
      },
      650: {
        autoWidth: false,
        items: 3,
        margin: 16,
      },
      1200: {
        autoWidth: false,
        items: 3,
        margin: 24,
      },
    },
  });

  $('.results__nav-right').click(function () {
    resultsContainer.trigger('next.owl.carousel');
  });
  $('.results__nav-left').click(function () {
    resultsContainer.trigger('prev.owl.carousel');
  });
});
