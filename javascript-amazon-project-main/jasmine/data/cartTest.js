import { addToCart, cart, loadFromStorage, removeFromCart } from "../../data/cart.js";
const productId1 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6"

describe('test suite: add to cart', () => {

  beforeEach(() => {
    spyOn(localStorage, 'setItem')
  })

  it('adds an existing product to the cart', () => {

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: 'productId1',
        quantity: 1,
        deliveryOptionId: '1'
      }])
    })
    loadFromStorage()

    addToCart('productId1')
    
    expect(cart.length).toEqual(1)
    
    expect(localStorage.setItem).toHaveBeenCalledTimes(1)
    
    expect(cart[0].productId).toEqual('productId1')
    
    expect(cart[0].quantity).toEqual(2)
  })

  it('adds a new product to the cart', () => {

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([])
    })
    loadFromStorage()

    addToCart('productId1')
    expect(cart.length).toEqual(1)
    
    expect(localStorage.setItem).toHaveBeenCalledTimes(1)
    
    expect(cart[0].productId).toEqual('productId1')
    
    expect(cart[0].quantity).toEqual(1)
  })
})

describe ('test suite: remove from cart', () => {

  beforeEach(() => {
    spyOn(localStorage, 'setItem')

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: productId1
      }])
    })
    loadFromStorage()
  })

  it ('removes an item form cart', () => {
    removeFromCart(productId1)

    expect(cart.length).toEqual(0)
  })

  it('removes the correct item from cart', () => {
    removeFromCart('15b6fc6f-327a-4ec4-896f-486349e85a3d')

    expect (cart.length).toEqual(1)
  })
})