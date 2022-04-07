import { renderProducts, createProductCarousel } from './products-list.js';
import { products, collections } from './data.js';

const productsContainer = document.querySelector('.products__list');
const makeupsContainer = document.querySelector('.about__makeups');
const collectionsContainer = document.querySelector('.collections__list');

// collections
collections.forEach((collection) => {
  const html = `
    <li class="collection">
        <img
        src="${collection.imgURL}"
        alt="${collection.title}"
        class="collection__img"
        />
        <h3 class="collection__title">${collection.title}</h3>
    </li>`;
  collectionsContainer.insertAdjacentHTML('beforeend', html);
});

$(document).ready(function () {
  //   Products carousel
  renderProducts(products, productsContainer);
  createProductCarousel(
    '.products__list',
    '.products__nav-left',
    '.products__nav-right',
  );

  // Collection carousel
  const collectionsCarousel = $('.collections__list');
  collectionsCarousel.owlCarousel({
    dots: false,
    responsive: {
      0: {
        autoWidth: true,
        margin: 8,
      },
      700: {
        margin: 16,
        autoWidth: true,
      },
      1001: {
        margin: 24,
        items: 2,
      },
    },
    stageOuterClass: 'collections__stage',
  });

  $('.collections__nav-right').click(function () {
    collectionsCarousel.trigger('next.owl.carousel');
  });
  $('.collections__nav-left').click(function () {
    collectionsCarousel.trigger('prev.owl.carousel');
  });
});

// make ups
// make draggable
let pos = { top: 0, left: 0, x: 0, y: 0 };

const mouseDownHandler = function (e) {
  // Change the cursor and prevent user from selecting the text
  makeupsContainer.style.cursor = 'grabbing';
  makeupsContainer.style.userSelect = 'none';

  pos = {
    // The current scroll
    left: makeupsContainer.scrollLeft,
    top: makeupsContainer.scrollTop,
    // Get the current mouse position
    x: e.clientX,
    y: e.clientY,
  };

  document.addEventListener('mousemove', mouseMoveHandler);
  document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function (e) {
  // How far the mouse has been moved
  const dx = e.clientX - pos.x;
  const dy = e.clientY - pos.y;

  // Scroll the element
  makeupsContainer.scrollTop = pos.top - dy;
  makeupsContainer.scrollLeft = pos.left - dx;
};

const mouseUpHandler = function () {
  document.removeEventListener('mousemove', mouseMoveHandler);
  document.removeEventListener('mouseup', mouseUpHandler);

  makeupsContainer.style.cursor = 'grab';
  makeupsContainer.style.removeProperty('user-select');
};

makeupsContainer.addEventListener('mousedown', mouseDownHandler);
