import { By } from 'selenium-webdriver'
import { driver } from '#utils/config'
import { getEventFromDataLayer } from '#utils/getDatalayer'
import { handleErrors } from '#utils/handleErrors'
import { IEventEnhanced } from '#typings/events'

export const view_cart = async (goToCheckout: boolean = false) => {
  it("view_cart", async () => {

    await driver.findElement(By.css('body')).click()
    await driver.findElement(By.css('.vtex-minicart-2-x-minicartIconContainer')).click()
    await driver.sleep(1000)

    !goToCheckout && await driver.findElement(By.css('.vtex-minicart-2-x-closeIconButton')).click()
    
    await getEventFromDataLayer(IEventEnhanced.Events.view_cart)
    .then(async events => {
      handleErrors(events)
      goToCheckout && await driver.findElement(By.css('#proceed-to-checkout')).click()
    })
  })
}