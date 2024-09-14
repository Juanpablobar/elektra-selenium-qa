const { By } = require('selenium-webdriver')
const { driver } = require('../../utils/config.ts')
const { getEventFromDataLayer } = require('../../utils/getDatalayer.ts')
const { handleErrors } = require('../../utils/handleErrors.ts')
const { selectRandomItemVisible } = require('../../utils/selectRandomItem.ts')
const { select_item } = require('../globals/select_item.ts')

const select_item_HOME = async () => {
  it("select_item", async () => {

    const shelfs = await driver.findElements(By.css('.vtex-shelf-1-x-sliderContainer--home-product__recommend .vtex-shelf-1-x-slide--home-product__recommend'))
    const selectRandomShelfVisible = await selectRandomItemVisible(shelfs)

    await select_item(selectRandomShelfVisible)
  })
}

exports.select_item_HOME = select_item_HOME