import { home } from './home'
import { pdp } from './pdp'
import { cart } from './checkout/cart'
import { email } from './checkout/email'
import { shipping } from './checkout/shipping'
import { payment } from './checkout/payment'
import { orderplaced } from './checkout/orderplaced'
import { getGifs } from '#utils/getGiphy'

const executeHappyPath = async () => {
  describe(`Happy Path - ${Date()}`, () => {
    home()
    pdp()
    cart()
    email()
    shipping()
    payment(false)
    orderplaced()
    getGifs()
  })
}

executeHappyPath()
