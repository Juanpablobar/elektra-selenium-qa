const { driver } = require('../../../utils/config')
const { checkout_steps } = require('../../globals/checkout_steps')

const orderplaced = () => {
  describe('events to execute on orderplaced', () => {
    driver.sleep(10000)
    checkout_steps('purchase', false)
  })
}

exports.orderplaced = orderplaced