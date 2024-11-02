import { orders } from "../data/orders.js";
import { getProducts, updateCartQuantity } from "./orders.js";
import  dayjs  from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

updateCartQuantity()

function getOrder (orderId) {
  let matchingOrder 
  orders.forEach((orderedItem) => {
    if (orderedItem.id === orderId) {
      matchingOrder = orderedItem
    }
  })
  return matchingOrder
}

const url = new URL(window.location.href)
const orderId = url.searchParams.get('orderId')
const productId = url.searchParams.get('productId')
const productImage = getProducts(productId).image
const productName = getProducts(productId).name
const matchingOrder = getOrder(orderId)
let { orderTime } = matchingOrder
let currentTime = dayjs()
let trackingPageSummary
let quantity
let deliveryTime

matchingOrder.products.forEach ((item) => {
  //console.log(item)
  if (item.productId === productId) {
    quantity = item.quantity
    deliveryTime = item.estimatedDeliveryTime
  }
})

trackingPageSummary = `
  <div class="delivery-date">Arriving on ${deliveryTime}</div>
  <div class="product-info">
    ${productName}
  </div>
  <div class="product-info">Quantity: ${quantity}</div>
  <img
    class="product-image"
    src="${productImage}"
  />
`

document.querySelector('.js-track-order-summary').innerHTML = trackingPageSummary
//console.log(orderTime - deliveryTime)
//console.log(deliveryTime)
//let progressPercentage = ((currentTime - orderTime)/ (deliveryTime - orderTime)) * 100