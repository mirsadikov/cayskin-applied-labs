import { allproducts, banners } from './data.js';
import { renderProducts } from './products-list.js';
const productsContainer = document.querySelector('.products__list');
const loadBtn = document.querySelector('.products__load-btn');

const addBanner = (productsContainer, i) => {
  if ((i + 1) % 6 == 0) {
    const bannerId = (i + 1) / 6 - 1;
    if (banners[bannerId]) {
      const bannerHTML = `
        <div class="products__banner">
            <img
            src="${banners[bannerId].imgURL}"
            alt="banner"
            class="products__banner-img"
            />
            <div class="products__banner-text">
            <h2 class="products__banner-title t--uppercase">
                ${banners[bannerId].title}
            </h2>
            <p class="products__banner-author">${banners[bannerId].author}</p>
            </div>
        </div>
        `;
      productsContainer.insertAdjacentHTML('beforeend', bannerHTML);
    }
  }
};

window.addEventListener('DOMContentLoaded', () => {
  renderProducts(allproducts, productsContainer, addBanner);
});

loadBtn.addEventListener('click', () => {
  renderProducts(allproducts, productsContainer, addBanner);
});
