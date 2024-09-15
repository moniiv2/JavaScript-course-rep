// console.log('hello');
import  dayjs  from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img
          class="product-image"
          src="${product.image}"
        />
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img
          class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png"
        />
        <div class="product-rating-count link-primary">${product.rating.count}</div>
      </div>

      <div class="product-price">$${(product.priceCents / 100).toFixed(2)}</div>

      <div class="product-quantity-container">
        <select class="js-quantity-selector-${product.id}">
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

          <div class="product-spacer"></div>

          <div class="js-added-to-cart added-to-cart">
            <img src="images/icons/checkmark.png" />
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id = "${product.id}">Add to Cart</button>
     </div>
  `;
});


document.querySelector('.js-products-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const {productId} = button.dataset;

    let matchingItem;

    const selecto = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);

    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });

    if (matchingItem) {
      matchingItem.quantity = 1 + (selecto - 1) + matchingItem.quantity
    } else {
    cart.push({
      productId,
      quantity: selecto
    });
    }
    //console.log(cart);

    let cartQuantity = 0;
    cart.forEach((item) => {
      cartQuantity += item.quantity
    });

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

    const addedMessage = document.querySelector('.js-added-to-cart');
    addedMessage.classList.add('added');

    setTimeout(() => {
      addedMessage.classList.remove('added');
    }, 3000);


  });
});

const today = dayjs()
const in5days = today.add(5, 'days').format('MMMM dddd')
console.log(in5days)
const inamonth = today.add(1, 'months').format('MMMM')
console.log(inamonth)
const beforethismonth = today.subtract(1, 'months').format('MMMM')
console.log(beforethismonth)

const day = today.format('dddd')
const date2 = today.subtract()
function isWeekend(date) {
  if (date === day) {
    console.log(`today, ${date}, is a part of the weekend`)
  } else {
    console.log('not weekend yet')
  }
}
isWeekend('Tuesday')
isWeekend('Saturday')