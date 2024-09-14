const { getEventFromDataLayer } = require('../../utils/getDatalayer')
const { handleErrors } = require('../../utils/handleErrors')

const checkout_steps = async (step, onlyLastEvent) => {
  it(step, async () => {

    return await getEventFromDataLayer(step, onlyLastEvent)
    .then(events => handleErrors(events))
  })
}

exports.checkout_steps = checkout_steps