const { driver } = require('../utils/config')
const { home } = require('./home/home')
const { pdp } = require('./pdp/pdp')
const { cart } = require('./checkout/cart/cart')
const { email } = require('./checkout/email/email')
const { shipping } = require('./checkout/shipping/shipping')
const { payment } = require('./checkout/payment/payment')
const { orderplaced } = require('./checkout/orderplaced/orderplaced')
const { getGifs } = require('../utils/getGiphy')

const executeHappyPath = async () => {
  home()
  pdp()
  // cart()
  // email()
  // shipping()
  // payment(false)
  // orderplaced()
  // getGifs()
}

executeHappyPath()
