const { By } = require('selenium-webdriver')
const { driver } = require('../../utils/config')
const { getEventFromDataLayer } = require('../../utils/getDatalayer')
const { handleErrors } = require('../../utils/handleErrors')

const click_comprar = async () => {
  it("click_comprar", async () => {

    await driver.findElement(By.css('.buttonCustomM')).click()

    await getEventFromDataLayer('click_comprar')
    .then(events => handleErrors(events))

  })
}

exports.click_comprar = click_comprar