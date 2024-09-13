const { By } = require('selenium-webdriver')
const { driver } = require('../../utils/config.ts')
const { getEventFromDataLayer } = require('../../utils/getDatalayer.ts')
const { handleErrors } = require('../../utils/handleErrors.ts')

const view_item_list = async () => {
  it("view_item_list", async () => {

    await getEventFromDataLayer('view_item_list')
    .then(events => handleErrors(events))

  })
}

exports.view_item_list = view_item_list