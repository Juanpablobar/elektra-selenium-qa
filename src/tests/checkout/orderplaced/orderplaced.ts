import { driver } from '../../../utils/config'
import { checkout_steps } from '../../globals/checkout_steps'

export const orderplaced = () => {
  describe('events to execute on orderplaced', () => {
    driver.sleep(10000)
    checkout_steps('purchase', false)
  })
}