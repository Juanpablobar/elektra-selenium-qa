const { driver } = require('../utils/config.ts')
const { home } = require('./home/home.ts')
const { pdp } = require('./pdp/pdp.ts')
const { cart } = require('./checkout/cart/cart.ts')
const { email } = require('./checkout/email/email.ts')
const { shipping } = require('./checkout/shipping/shipping.ts')
const { payment } = require('./checkout/payment/payment.ts')
const { orderplaced } = require('./checkout/orderplaced/orderplaced.ts')

const executeHappyPath = async () => {
  home()
  pdp()
  cart()
  email()
  shipping()
  payment(false)
  orderplaced().then(() => driver.quit())
}

executeHappyPath()
