const { By } = require('selenium-webdriver')
const { driver } = require('../../utils/config.ts')
const { getEventFromDataLayer } = require('../../utils/getDatalayer.ts')
const { handleErrors } = require('../../utils/handleErrors.ts')

const view_cart = async () => {
  it("view_cart", async () => {

    await driver.findElement(By.css('.vtex-minicart-2-x-minicartIconContainer')).click()
  
    await getEventFromDataLayer('view_cart')
    .then(events => handleErrors(events))
  })
}

exports.view_cart = view_cart