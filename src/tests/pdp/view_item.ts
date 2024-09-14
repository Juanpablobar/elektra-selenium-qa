const { By } = require('selenium-webdriver')
const { driver } = require('../../utils/config')
const { getEventFromDataLayer } = require('../../utils/getDatalayer')
const { handleErrors } = require('../../utils/handleErrors')

const view_item = async () => {
  it("view_item", async () => {

    await getEventFromDataLayer('view_item')
    .then(events => handleErrors(events))

  })}

exports.view_item = view_item