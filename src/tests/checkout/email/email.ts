const { By } = require('selenium-webdriver')
const { driver } = require('../../../utils/config')
const { checkout_steps } = require('../../globals/checkout_steps')

const emailUser = process.env.EMAIL

const email = () => {
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

exports.email = email