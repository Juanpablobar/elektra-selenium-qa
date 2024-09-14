import { By } from 'selenium-webdriver'
import { driver } from '../../../utils/config'
import { checkout_steps } from '../../globals/checkout_steps'

const emailUser = process.env.EMAIL

export const email = () => {
  describe('events to execute on email', async () => {

    checkout_steps('add_email_info')
    it("Rellenar datos de perfil", async () => {

      const emailInput = await driver.findElement(By.css('#email-display'))
      await emailInput?.click()
      await emailInput?.sendKeys(emailUser)
      await driver.findElement(By.css('body'))?.click()
    })
  })
}