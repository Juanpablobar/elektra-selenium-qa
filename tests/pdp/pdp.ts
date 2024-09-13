const { driver, setUrl } = require('../../utils/config.ts')
const { view_item } = require('./../pdp/view_item.ts')
const { add_to_cart_PDP } = require('./../pdp/add_to_cart.ts')
const { view_cart } = require('./../globals/view_cart.ts')

const workspace = process.env.WORKSPACE || ''
const pdpUrl = process.env.PDP || ''

const pdp = () => {
  describe('events to execute on pdp', async () => {

    it('PDP', async () => await setUrl(workspace + pdpUrl))
  
    view_item()
    add_to_cart_PDP()
    view_cart()
  
  })
}

exports.pdp = pdp