const { setUrl } = require('../../utils/config')
const { view_item } = require('./view_item')
const { add_to_cart_PDP } = require('./add_to_cart')
const { view_cart } = require('./../globals/view_cart')
const { click_comprar } = require('./click_comprar')

const pdp = (url) => {
  describe('events to execute on pdp', async () => {

    url && it('PDP', async () => await setUrl(url))
  
    view_item()
    add_to_cart_PDP()
    view_cart(true)
  
  })
}

exports.pdp = pdp