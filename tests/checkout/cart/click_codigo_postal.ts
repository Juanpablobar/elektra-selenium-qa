const { By } = require('selenium-webdriver')
const { driver } = require('../../../utils/config.ts')
const { getEventFromDataLayer } = require('../../../utils/getDatalayer.ts')
const { handleErrors } = require('../../../utils/handleErrors.ts')

const cp = process.env.CP

const click_codigo_postal = async () => {
  it("click_codigo_postal", async () => {

    const codigoPostal = await driver.findElement(By.css('#newPostalCode'))
    codigoPostal?.click()
    codigoPostal?.sendKeys(cp)

    await getEventFromDataLayer('click_codigo_postal')
    .then(events => handleErrors(events))
  })
}

exports.click_codigo_postal = click_codigo_postal