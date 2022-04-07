export const renderProducts = (products, container, afterEach) => {
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

    container.insertAdjacentHTML('beforeend', html);

    if (afterEach) {
      afterEach(container, i);
    }
  });
};

export const createProductCarousel = (container, prev, next) => {
  const productsCarousel = $(container);
  productsCarousel.owlCarousel({
    dots: false,
    stageOuterClass: 'products__stage',
    responsive: {
      0: {
        autoWidth: true,
        margin: 8,
      },
      600: {
        margin: 16,
        autoWidth: true,
      },
      1001: {
        margin: 24,
        autoWidth: false,
        items: 3,
      },
    },
  });

  $(next).click(function () {
    productsCarousel.trigger('next.owl.carousel');
  });
  $(prev).click(function () {
    productsCarousel.trigger('prev.owl.carousel');
  });
};
