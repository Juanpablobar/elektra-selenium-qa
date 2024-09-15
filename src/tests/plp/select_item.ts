import { By } from 'selenium-webdriver'
import { driver } from '#utils/config'
import { getEventFromDataLayer } from '#utils/getDatalayer'
import { handleErrors } from '#utils/handleErrors'
import { IEventEnhanced } from '#typings/events'

export const select_item_PLP = async () => {
  it("select_item", async () => {

    await driver.findElement(By.css('.vtex-search-result-3-x-searchResultContainer .vtex-product-summary-2-x-clearLink')).click()

    await getEventFromDataLayer(IEventEnhanced.Events.select_item)
    .then(events => handleErrors(events))

  })
}