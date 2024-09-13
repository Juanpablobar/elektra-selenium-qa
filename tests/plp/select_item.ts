const { By } = require('selenium-webdriver')
const { driver } = require('../../utils/config.ts')
const { getEventFromDataLayer } = require('../../utils/getDatalayer.ts')
const { handleErrors } = require('../../utils/handleErrors.ts')

const select_item_PLP = async () => {
  it("select_item", async () => {

    await driver.findElement(By.css('.vtex-search-result-3-x-searchResultContainer .vtex-product-summary-2-x-clearLink')).click()

    await getEventFromDataLayer('select_item')
    .then(events => handleErrors(events))

  })
}

exports.select_item_PLP = select_item_PLP