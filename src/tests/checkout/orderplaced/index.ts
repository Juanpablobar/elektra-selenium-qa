import { driver } from '#utils/config'
import { checkout_steps } from '#globals/checkout_steps'
import { IEventEnhanced } from '#typings/events'

export const orderplaced = () => {
  describe('events to execute on orderplaced', () => {
    driver.sleep(10000)
    checkout_steps(IEventEnhanced.Events.purchase, false)
  })
}