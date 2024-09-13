const { By } = require('selenium-webdriver')
const { driver } = require('../../utils/config.ts')
const { getEventFromDataLayer } = require('../../utils/getDatalayer.ts')
const { handleErrors } = require('../../utils/handleErrors.ts')

const add_to_cart_PDP = async () => {
  it("add_to_cart", async () => {

    await driver.findElement(By.css('#vtex-add-to-cart .vtex-button__label')).click()

    await getEventFromDataLayer('add_to_cart')
    .then(events => handleErrors(events))

  })
}

exports.add_to_cart_PDP = add_to_cart_PDP