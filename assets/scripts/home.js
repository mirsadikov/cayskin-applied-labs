const productsContainer = document.querySelector('.products__list');
const makeupsContainer = document.querySelector('.about__makeups');
const collectionsContainer = document.querySelector('.collections__list');

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
    imgURL: '/assets/images/products/product4.png',
    title: 'ISIE Glow body lotion SPF45',
    price: '28.00',
  },
  {
    imgURL: '/assets/images/products/product5.png',
    title: 'Universal Mineral body lotion SPF55',
    price: '28.00',
    hot: true,
  },
  {
    imgURL: '/assets/images/products/product6.png',
    title: 'Isle body oil SPF30',
    price: '28.00',
    hot: true,
  },
];

const collections = [
  {
    imgURL: '/assets/images/home/collection1.png',
    title: 'Sed ut perspiciatis',
  },
  {
    imgURL: '/assets/images/home/collection2.png',
    title: 'Lorem ipsum dolor',
  },
  {
    imgURL: '/assets/images/home/collection3.png',
    title: 'At vero eos',
  },
];

products.forEach((product) => {
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
});

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
  const productsCarousel = $('.products__list');
  productsCarousel.owlCarousel({
    items: 3,
    margin: 24,
    dots: false,
    stageOuterClass: 'products__stage',
  });

  $('.products__nav-right').click(function () {
    productsCarousel.trigger('next.owl.carousel');
  });
  $('.products__nav-left').click(function () {
    productsCarousel.trigger('prev.owl.carousel');
  });

  // Make ups carousel
  const makeupsCarousel = $('.about__makeups');
  makeupsCarousel.owlCarousel({
    items: 4,
    margin: 24,
  });

  const collectionsCarousel = $('.collections__list');
  collectionsCarousel.owlCarousel({
    items: 2,
    dots: false,
    margin: 24,
    stageOuterClass: 'collections__stage',
  });

  $('.collections__nav-right').click(function () {
    collectionsCarousel.trigger('next.owl.carousel');
  });
  $('.collections__nav-left').click(function () {
    collectionsCarousel.trigger('prev.owl.carousel');
  });
});
