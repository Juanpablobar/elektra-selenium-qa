const { driver, setUrl } = require('../../utils/config.ts')
const { view_item_list } = require('./../plp/view_item_list.ts')
const { view_cart } = require('./../globals/view_cart.ts')

const workspace = process.env.WORKSPACE || ''
const plpUrl = process.env.PLP || ''

const plp = () => {
  describe('events to execute on plp', async () => {

    it('PLP', async () => await setUrl(workspace + plpUrl))
  
    view_item_list()
    view_cart()
  })
}

exports.plp = plp