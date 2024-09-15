import { By } from 'selenium-webdriver'
import { driver } from '#utils/config'
import { checkout_steps } from '#globals/checkout_steps'
import { click_codigo_postal } from './click_codigo_postal'
import { IEventEnhanced } from '#typings/events'

export const cart = (goToNextStep = true) => {
  describe('events to execute on cart', async () => {

    checkout_steps(IEventEnhanced.CheckoutEvents.begin_checkout)
    click_codigo_postal()
    goToNextStep && it('Click Continuar Compra', async () => await driver.findElement(By.css('.resume_continueButton__1CtpZ'))?.click())
  })
}