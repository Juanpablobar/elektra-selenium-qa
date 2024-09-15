import { getEventFromDataLayer } from '#utils/getDatalayer'
import { handleErrors } from '#utils/handleErrors'

export const checkout_steps = async (step, onlyLastEvent) => {
  it(step, async () => {

    return await getEventFromDataLayer(step, onlyLastEvent)
    .then(events => handleErrors(events))
  })
}