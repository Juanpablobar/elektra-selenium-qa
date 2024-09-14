const { By } = require('selenium-webdriver')
const { driver } = require('../../utils/config.ts')
const { getEventFromDataLayer } = require('../../utils/getDatalayer.ts')
const { handleErrors } = require('../../utils/handleErrors.ts')

const view_cart = async (goToCheckout = false) => {
  it("view_cart", async () => {

    await driver.findElement(By.css('body')).click()
    await driver.findElement(By.css('.vtex-minicart-2-x-minicartIconContainer')).click()
    await driver.sleep(1000)

    !goToCheckout && await driver.findElement(By.css('.vtex-minicart-2-x-closeIconButton')).click()
    
    await getEventFromDataLayer('view_cart')
    .then(async events => {
      handleErrors(events)
      goToCheckout && await driver.findElement(By.css('#proceed-to-checkout')).click()
    })
  })
}

exports.view_cart = view_cart