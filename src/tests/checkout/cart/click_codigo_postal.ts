import { By } from 'selenium-webdriver'
import { driver } from '#utils/config'
import { getEventFromDataLayer } from '#utils/getDatalayer'
import { handleErrors } from '#utils/handleErrors'

const cp = process.env.CP

export const click_codigo_postal = async () => {
  it("click_codigo_postal", async () => {

    const codigoPostal = await driver.findElement(By.css('#newPostalCode'))
    codigoPostal?.click()
    codigoPostal?.sendKeys(cp)

    await getEventFromDataLayer('click_codigo_postal')
    .then(events => handleErrors(events))
  })
}