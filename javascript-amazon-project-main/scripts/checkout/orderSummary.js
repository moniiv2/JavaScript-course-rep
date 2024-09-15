import { calculateCartQuantity, cart, removeFromCart, updateDeliveryOption } from "../../data/cart.js";
import { getProduct, products } from "../../data/products.js";
import { formatCurrrency } from "../utils/money.js";
import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
import  dayjs  from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { deliveryOptions, getDeliveryOption } from "../../data/deleveryOptions.js";
import { renderPaymentSummary } from "./paymentSummary.js";


 export function renderOrderSummary () {
    let cartSummaryHTML = '';

    cart.forEach((cartItem) => {
      const { productId } = cartItem;

    let matchingProduct = getProduct(productId);


    //console.log(matchingProduct);

    const deliveryOptionId = cartItem.deliveryOptionId

    let deliveryOption = getDeliveryOption(deliveryOptionId);

    const today = dayjs();
      const deliveryDate = today.add(deliveryOption.deliveryDays, 'days')
      const dateString = deliveryDate.format(
        'dddd, MMMM D'
      );

    cartSummaryHTML += `
        <div class="js-cart-item-container-${matchingProduct.id} cart-item-container">
          <div class="delivery-date">Delivery date: ${dateString} </div>

          <div class="cart-item-details-grid">
            <img
              class="product-image"
              src="${matchingProduct.image}"
            />

            <div class="cart-item-details">
              <div class="product-name">
                ${matchingProduct.name}
              </div>
              <div class="product-price">$${formatCurrrency(matchingProduct.priceCents)}</div>
              <div class="product-quantity">
                <span> Quantity: <span class="quantity-label">${cartItem.quantity}</span> </span>
                <span class="update-quantity-link link-primary">
                  Update
                </span>
                <span class="js-delete-link delete-quantity-link link-primary" data-product-id = "${matchingProduct.id}">
                  Delete
                </span>
              </div>
            </div>

            <div class="delivery-options">
              <div class="delivery-options-title">
                Choose a delivery option:
              </div>
              ${deliveryOptionsHTML(matchingProduct, cartItem)}
            </div>
          </div>
        </div>
      `;
    });

    function deliveryOptionsHTML (matchingProduct, cartItem) {
    let html = ''

      deliveryOptions.forEach((deliveryOption) => {
        const today = dayjs();
        const deliveryDate = today.add(deliveryOption.deliveryDays, 'days')
        const dateString = deliveryDate.format(
          'dddd, MMMM D'
        );

        const priceString = deliveryOption.priceCents === 0
        ? 'FREE'
        : `$${formatCurrrency(deliveryOption.priceCents)} -`

        const isChecked = deliveryOption.id === cartItem.deliveryOptionId

        html += `
        <div class="delivery-option js-delivery-option"
        data-product-id = "${matchingProduct.id}"
        data-delivery-option-id = "${deliveryOption.id}">
          <input
            type="radio"
            ${isChecked ? 'checked' : '' }
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}"
          />
          <div>
            <div class="delivery-option-date">
              ${dateString}
            </div>
            <div class="delivery-option-price">${priceString} Shipping</div>
          </div>
        </div>
        `
      })
      return html
    }

    document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;
    //console.log(cartSummaryHTML);

    document.querySelectorAll('.js-delete-link').forEach((link) => {
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        removeFromCart(productId);

        const container = document.querySelector(`.js-cart-item-container-${productId}`);
        //console.log(container);

        container.remove();

        updateCheckoutDisplay()

        renderPaymentSummary()
      });
    });

    function updateCheckoutDisplay () {
      document.querySelector('.js-checkout-display').innerHTML = `${calculateCartQuantity()} items` 
    }

    updateCheckoutDisplay();

    document.querySelectorAll('.js-delivery-option').forEach((element) => {
      element.addEventListener('click', () => {
        const { productId, deliveryOptionId } = element.dataset
        updateDeliveryOption(productId, deliveryOptionId)
        renderOrderSummary()
        renderPaymentSummary()
      })
    })
    }



// document.querySelectorAll('.js-update-quantity-link').forEach((link) => {
//   link.addEventListener('click', () => {
//     const productId = link.dataset.productId;
//     document.querySelector('.js-quantity-input').classList.add('is-editing-quantity')
//     document.querySelector('.js-save').classList.add('is-editing-quantity')
//   })
// })