import { By } from 'selenium-webdriver'

import { driver } from '#utils/config'
import { getEventFromDataLayer } from '#utils/getDatalayer'
import { handleErrors } from '#utils/handleErrors'

export const add_to_cart_PDP = async () => {
  it("add_to_cart", async () => {

    await driver.findElement(By.css('#vtex-add-to-cart .vtex-button__label')).click()

    await getEventFromDataLayer('add_to_cart')
    .then(events => handleErrors(events))

  })
}