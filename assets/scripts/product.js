import { renderProducts, createProductCarousel } from './products-list.js';
import { products } from './data.js';

const productsContainer = document.querySelector('.products__list');

window.addEventListener('DOMContentLoaded', () => {
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
