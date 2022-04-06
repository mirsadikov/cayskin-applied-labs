const productsContainer = document.querySelector('.products__list');
const loadBtn = document.querySelector('.products__load-btn');

const products = [
  {
    imgURL: '/assets/images/products/product1.png',
    title: 'Your Skin But Better CC+ Cream with SPF50 12ml',
    price: '28.00',
    type: 'new',
  },
  {
    imgURL: '/assets/images/products/product2.png',
    title: 'KEM DUONG VT CICA - VT CICA CREAM',
    price: '28.00',
    priceOld: '$32.00',
    type: 'sale',
  },
  {
    imgURL: '/assets/images/products/product3.png',
    title: 'Niche Beauty CCC Cream – Niche Beauty',
    price: '28.00',
  },
  {
    imgURL: '/assets/images/products/product1.png',
    title: 'Your Skin But Better CC+ Cream with SPF50 12ml',
    price: '28.00',
    type: 'new',
  },
  {
    imgURL: '/assets/images/products/product2.png',
    title: 'KEM DUONG VT CICA - VT CICA CREAM',
    price: '28.00',
    priceOld: '$32.00',
    type: 'sale',
  },
  {
    imgURL: '/assets/images/products/product3.png',
    title: 'Niche Beauty CCC Cream – Niche Beauty',
    price: '28.00',
  },
  {
    imgURL: '/assets/images/products/product3.png',
    title: 'Niche Beauty CCC Cream – Niche Beauty',
    price: '28.00',
  },
  {
    imgURL: '/assets/images/products/product1.png',
    title: 'Your Skin But Better CC+ Cream with SPF50 12ml',
    price: '28.00',
    type: 'new',
  },
  {
    imgURL: '/assets/images/products/product2.png',
    title: 'KEM DUONG VT CICA - VT CICA CREAM',
    price: '28.00',
    priceOld: '$32.00',
    type: 'sale',
  },
  {
    imgURL: '/assets/images/products/product3.png',
    title: 'Niche Beauty CCC Cream – Niche Beauty',
    price: '28.00',
  },
  {
    imgURL: '/assets/images/products/product1.png',
    title: 'Your Skin But Better CC+ Cream with SPF50 12ml',
    price: '28.00',
    type: 'new',
  },
  {
    imgURL: '/assets/images/products/product2.png',
    title: 'KEM DUONG VT CICA - VT CICA CREAM',
    price: '28.00',
    priceOld: '$32.00',
    type: 'sale',
  },
  {
    imgURL: '/assets/images/products/product3.png',
    title: 'Niche Beauty CCC Cream – Niche Beauty',
    price: '28.00',
  },
  {
    imgURL: '/assets/images/products/product1.png',
    title: 'Your Skin But Better CC+ Cream with SPF50 12ml',
    price: '28.00',
    type: 'new',
  },
  {
    imgURL: '/assets/images/products/product2.png',
    title: 'KEM DUONG VT CICA - VT CICA CREAM',
    price: '28.00',
    priceOld: '$32.00',
    type: 'sale',
  },
  {
    imgURL: '/assets/images/products/product3.png',
    title: 'Niche Beauty CCC Cream – Niche Beauty',
    price: '28.00',
  },
];

const banners = [
  {
    title: 'At vero eos et accusamus et iusto odio dignissimos',
    author: 'Winnie Harlow',
    imgURL: '/assets/images/collection/banner1.png',
  },
];

const renderProducts = (products) => {
  products.forEach((product, i) => {
    const html = `
    <div class="product ${product.hot ? 'product--hot' : ''}">
    <div class="product__img-container">
      <a href="/product.html">
        <img
            src="${product.imgURL}"
            alt="${product.title}"
            load="lazy"
            class="product__img"
        />
        ${
          product.type === 'new'
            ? '<span class="product__badge u-rounded">New</span>'
            : product.type === 'sale'
            ? '<span class="product__badge product__badge--opacity u-rounded">Sale</span>'
            : ''
        }
      </a>
      <a href="#" class="product__link">+ Quick Shop</a>
    </div>
    <a href="/product.html">
      <h3 class="product__title">
        ${product.title}
      </h3>
      <p class="product__price">$${
        product.price
      } <span class="product__price--old">${
      product.priceOld ? product.priceOld : ''
    }</span></p>
    </a>
    </div>`;

    productsContainer.insertAdjacentHTML('beforeend', html);

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
  });
};

window.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);
});

loadBtn.addEventListener('click', () => {
  renderProducts(products);
});
