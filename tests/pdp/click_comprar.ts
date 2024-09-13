const { By } = require('selenium-webdriver')
const { driver } = require('../../utils/config.ts')
const { getEventFromDataLayer } = require('../../utils/getDatalayer.ts')
const { handleErrors } = require('../../utils/handleErrors.ts')

const click_comprar = async () => {
  it("click_comprar", async () => {

    await driver.findElement(By.css('.buttonCustomM')).click()

    await getEventFromDataLayer('click_comprar')
    .then(events => handleErrors(events))

  })
}

exports.click_comprar = click_comprar