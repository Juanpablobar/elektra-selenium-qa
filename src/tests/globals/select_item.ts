import { By, WebElement } from 'selenium-webdriver'
import { driver } from '#utils/config'
import { getEventFromDataLayer } from '#utils/getDatalayer'
import { handleErrors } from '#utils/handleErrors'
import { IEventEnhanced } from '#typings/events'

export const select_item = async (shelf: WebElement) => {

    await driver.actions()
      .scroll(0, 0, 0, 0, shelf)
      .perform()

      const shelfLink = await shelf?.findElement(By.css('.vtex-product-summary-2-x-clearLink'))
      await shelfLink?.click()

    await getEventFromDataLayer(IEventEnhanced.Events.select_item)
    .then(events => handleErrors(events))
    
}