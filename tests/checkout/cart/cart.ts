const { By } = require('selenium-webdriver')
const { driver } = require('../../../utils/config.ts')
const { checkout_steps } = require('../../globals/checkout_steps.ts')
const { click_codigo_postal } = require('./click_codigo_postal.ts')

const cart = (goToNextStep = true) => {
  describe('events to execute on cart', async () => {

    checkout_steps('begin_checkout')
    click_codigo_postal()
    goToNextStep && it('Click Continuar Compra', async () => await driver.findElement(By.css('.resume_continueButton__1CtpZ'))?.click())
  })
}

exports.cart = cart