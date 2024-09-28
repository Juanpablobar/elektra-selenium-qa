import { By } from 'selenium-webdriver'
import { driver } from '#utils/config'
import { checkout_steps } from '#globals/checkout_steps'
import { IEventEnhanced } from '#typings/events'

export const shipping = () => {
  describe('events to execute on shipping', async () => {

    checkout_steps(IEventEnhanced.Events.add_shipping_info)
    it("Click para continuar hacia Payment", async () => {

      await driver.sleep(4000)
      // El checkout hace un redireccionamiento de nuevo hacia el cart, con este click se regresa a shipping
      await driver.findElement(By.css('.resume_continueButton__1CtpZ'))?.click()
      await driver.sleep(1000)
      await driver.findElement(By.css('#Shipping_buttonBar__JpQ7s'))?.click()
    })
  })
}