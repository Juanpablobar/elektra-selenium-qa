const { getEventFromDataLayer } = require('../../utils/getDatalayer.ts')
const { handleErrors } = require('../../utils/handleErrors.ts')

const checkout_steps = async (step, onlyLastEvent) => {
  it(step, async () => {

    return await getEventFromDataLayer(step, onlyLastEvent)
    .then(events => handleErrors(events))
  })
}

exports.checkout_steps = checkout_steps