import { orders } from "../data/orders.js";
import  dayjs  from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { formatCurrrency } from "./utils/money.js";
import { allProducts } from "../data/literallyAllProducts.js";
import { addToCart, calculateCartQuantity } from "../data/cart.js";

updateCartQuantity()

export function getProducts(productId) {
  let matchingProduct;
  
  allProducts.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });
  return matchingProduct
}


/*
id
orderTime
totalCostCents
products = [{
productId
quantity
estimatedDeliveryTime
variation: null
}]
*/

let orderSummary = ` `

orders.forEach((orderedItem, index) => {

orderSummary += `
<div class="order-container">
  <div class="order-header">
    <div class="order-header-left-section">
      <div class="order-date">
        <div class="order-header-label">Order Placed:</div>
        <div>${orderedItem.orderTime}</div>
      </div>
      <div class="order-total">
        <div class="order-header-label">Total:</div>
        <div>$${formatCurrrency(orderedItem.totalCostCents)}</div>
    </div>
   </div>

    <div class="order-header-right-section">
      <div class="order-header-label">Order ID:</div>
      <div>${orderedItem.id}</div>
    </div>
  </div>
  <div class="order-details-grid js-order-details-grid">
    ${renderOrderedProducts(orderedItem)}
  </div>
</div>
  
` 
})


function renderOrderedProducts(orderedItem) {
  let orderedProducts = ``

  orderedItem.products.forEach((item) => {
    //console.log(item.quantity)
  const orderProductId = item.productId

  const orderQuantity = item.quantity

  const orderDeliveryTime = item.estimatedDeliveryTime

  let productName = getProducts(item.productId).name

  let productImage = getProducts(item.productId).image

    orderedProducts += `
  <div class="product-image-container">
    <img src="${productImage}" />
  </div>

  <div class="product-details">
    <div class="product-name">
      ${productName}
    </div>
    <div class="product-delivery-date">Arriving on: ${orderDeliveryTime}</div>
    <div class="product-quantity">Quantity: 
    ${orderQuantity}
    </div>
    <button class="buy-again-button button-primary">
      <img class="buy-again-icon" src="images/icons/buy-again.png" />
      <span class="buy-again-message js-buy-again" data-product-id = ${orderProductId}>Buy it again</span>
    </button>
  </div>

  <div class="product-actions">
    <a href="tracking.html?orderId=${orderedItem.id}&productId=${orderProductId}">
      <button class="track-package-button button-secondary js-track-button">
        Track package
      </button>
    </a>
  </div>
  `  
  })

return orderedProducts
}


document.querySelector('.js-order-grid').innerHTML = orderSummary


//document.querySelector('.js-order-details-grid').innerHTML = orderedProducts 

const buyAgain = document.querySelectorAll('.js-buy-again')
buyAgain.forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId

    addToCart(productId)

    updateCartQuantity()
  })
})

export function updateCartQuantity () {
  document.querySelector('.js-cart-quantity').innerHTML = calculateCartQuantity();
}

document.querySelectorAll('.js-track-button').forEach((button) => {
  button.addEventListener('click', () => {
    window.location.href = 'tracking.html'
    //trackPackage()
  })
}) 



//console.log(dayjs().format('MMMM D'))

/* 
<div class="order-details-grid">
    ${renderOrderedProducts()}
  </div>
*/

/*
const array = ['apple', {'name': 'moni'}, 'cherry'];

array.forEach((item, index) => {
  console.log(`Index: ${index}, Item: ${item}`);
});
*/

//${orderedItem.totalCostCents.getPrice()}

//orders.products


