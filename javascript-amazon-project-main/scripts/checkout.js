import { loadCart, loadCartFetch } from "../data/cart.js";
import { loadProductsFetch } from "../data/products.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";

// import '../data/cart-class.js'
// import '../data/car.js'
// import '../data/backend-practice.js'

async function loadPage () {
  try{
  // throw 'error 1'

  await Promise.all([
    loadProductsFetch(),
    loadCartFetch()
  ])
  

  /*
  await new Promise((resolve, reject) => {
    // throw "eerror 2"
    loadCart(() => {
      // reject('error 3')
      resolve()
    })
  })
  */

  } catch (error) {
    console.log('unexpected error. please try again')
  }
  

  renderOrderSummary();
  renderPaymentSummary();

}
loadPage()

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve()
    })
  })

]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
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