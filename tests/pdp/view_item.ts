const { By } = require('selenium-webdriver')
const { driver } = require('../../utils/config.ts')
const { getEventFromDataLayer } = require('../../utils/getDatalayer.ts')
const { handleErrors } = require('../../utils/handleErrors.ts')

const view_item = async () => {
  it("view_item", async () => {

    await getEventFromDataLayer('view_item')
    .then(events => handleErrors(events))

  })}

exports.view_item = view_item