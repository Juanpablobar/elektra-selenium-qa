import { home } from './home/home'
import { pdp } from './pdp/pdp'
import { cart } from './checkout/cart/cart'
import { email } from './checkout/email/email'
import { shipping } from './checkout/shipping/shipping'
import { payment } from './checkout/payment/payment'
import { orderplaced } from './checkout/orderplaced/orderplaced'
import { getGifs } from '../utils/getGiphy'

const executeHappyPath = async () => {
  home()
  pdp()
  cart()
  email()
  shipping()
  payment(false)
  orderplaced()
  getGifs()
}

executeHappyPath()
