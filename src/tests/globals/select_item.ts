const { By } = require('selenium-webdriver')
const { driver } = require('../../utils/config')
const { getEventFromDataLayer } = require('../../utils/getDatalayer')
const { handleErrors } = require('../../utils/handleErrors')

const select_item = async (shelf) => {

    await driver.actions()
      .scroll(0, 0, 0, 0, shelf)
      .perform()

      const shelfLink = await shelf?.findElement(By.css('.vtex-product-summary-2-x-clearLink'))
      await shelfLink?.click()

    await getEventFromDataLayer('select_item')
    .then(events => handleErrors(events))
    
}

exports.select_item = select_item