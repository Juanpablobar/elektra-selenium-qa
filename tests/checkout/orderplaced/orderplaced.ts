const { driver } = require('../../../utils/config.ts')
const { checkout_steps } = require('../../globals/checkout_steps.ts')

const orderplaced = () => {
  describe('events to execute on orderplaced', async () => {
    await driver.sleep(10000)
    await checkout_steps('purchase', false)
  })
}

exports.orderplaced = orderplaced