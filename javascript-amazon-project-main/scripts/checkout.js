import { loadCart } from "../data/cart.js";
import { loadProducts } from "../data/products.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";

// import '../data/cart-class.js'
// import '../data/car.js'
// import '../data/backend-practice.js'

Promise.all([
  new Promise((resolve) => {
    loadProducts(() => {
      resolve('value 1')
    })
  }),
  new Promise((resolve) => {
    loadCart(() => {
      resolve('hijo reputa!')
    })
  })

]).then((values) => {
  renderOrderSummary();
  renderPaymentSummary();
  values.forEach((say) => {
    console.log(say)
  })
})




/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value 1')
  })

}).then((value) => {
  console.log(value)

  return new Promise((resolve) => {
    loadCart(() => {
      resolve()
    })

}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
  })
})
*/

// loadProducts(() => {
//   loadCart(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   })
// })