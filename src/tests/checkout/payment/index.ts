import { By } from 'selenium-webdriver'
import { driver } from '#utils/config'
import { checkout_steps } from '#globals/checkout_steps'
import { IEventEnhanced } from '#typings/events'

export const payment = (finalizePurchase = false) => {
  describe('events to execute on payment', async () => {

    checkout_steps(IEventEnhanced.CheckoutEvents.add_payment_info)
    it("Click para seleccionar método de pago", async () => {

      const paymentMethods = await driver.findElements(By.css('.PaymentMethods_method__3PcCF'))
      await driver.actions()
      .scroll(500, 0, 0, 0, paymentMethods[paymentMethods?.length - 1])
      .perform()

      await driver.sleep(5000)
      await paymentMethods[3]?.click()
      await driver.sleep(5000)
      finalizePurchase && await driver.findElement(By.css('#payNamebaz'))?.click()
    })
  })
}