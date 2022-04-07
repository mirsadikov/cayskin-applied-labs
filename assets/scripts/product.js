import { renderProducts, createProductCarousel } from './products-list.js';
import { products } from './data.js';

const productsContainer = document.querySelector('.products__list');

$(document).ready(function () {
  //   Products carousel
  renderProducts(products, productsContainer);
  createProductCarousel(
    '.products__list',
    '.products__nav-left',
    '.products__nav-right',
  );
});
