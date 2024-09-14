import { By } from 'selenium-webdriver'
import { driver } from '../../utils/config'
import { getEventFromDataLayer } from '../../utils/getDatalayer'
import { handleErrors } from '../../utils/handleErrors'

export const click_comprar = async () => {
  it("click_comprar", async () => {

    await driver.findElement(By.css('.buttonCustomM')).click()

    await getEventFromDataLayer('click_comprar')
    .then(events => handleErrors(events))

  })
}