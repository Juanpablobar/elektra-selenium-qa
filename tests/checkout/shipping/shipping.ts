const { By } = require('selenium-webdriver')
const { driver } = require('../../../utils/config.ts')
const { checkout_steps } = require('../../globals/checkout_steps.ts')

const shipping = () => {
  describe('events to execute on shipping', async () => {

    checkout_steps('add_shipping_info')
    it("Click para continuar hacia Payment", async () => {

      await driver.sleep(4000)
      // El checkout hace un redireccionamiento de nuevo hacia el cart, con este click se regresa a shipping
      await driver.findElement(By.css('.resume_continueButton__1CtpZ'))?.click()
      await driver.sleep(1000)
      await driver.findElement(By.css('#Shipping_buttonBar__JpQ7s'))?.click()
    })
  })
}

exports.shipping = shipping