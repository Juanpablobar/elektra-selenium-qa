import { By } from 'selenium-webdriver'
import { driver } from '#utils/config'
import { selectRandomItemVisible } from '#utils/selectRandomItem'
import { select_item } from '#globals/select_item'

export const select_item_HOME = async () => {
  it("select_item", async () => {

    const shelfs = await driver.findElements(By.css('.vtex-shelf-1-x-sliderContainer--home-product__recommend .vtex-shelf-1-x-slide--home-product__recommend'))
    const selectRandomShelfVisible = await selectRandomItemVisible(shelfs)

    await select_item(selectRandomShelfVisible)
  })
}