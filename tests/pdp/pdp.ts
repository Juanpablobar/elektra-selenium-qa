const { setUrl } = require('../../utils/config.ts')
const { view_item } = require('./view_item.ts')
const { add_to_cart_PDP } = require('./add_to_cart.ts')
const { view_cart } = require('./../globals/view_cart.ts')
const { click_comprar } = require('./click_comprar.ts')

const pdp = (url) => {
  describe('events to execute on pdp', async () => {

    url && it('PDP', async () => await setUrl(url))
  
    view_item()
    add_to_cart_PDP()
    view_cart(true)
  
  })
}

exports.pdp = pdp