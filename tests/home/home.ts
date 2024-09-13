const { driver, setUrl } = require('../../utils/config.ts')
const { view_cart } = require('./../globals/view_cart.ts')

const workspace = process.env.WORKSPACE || ''

const home = () => {
  describe('events to execute on home', async () => {

    it('home', async () => await setUrl(workspace))
  
    view_cart()
  })
}

exports.home = home