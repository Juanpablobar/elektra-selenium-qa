import { IEventEnhanced } from '#typings/events'
import { getEventFromDataLayer } from '#utils/getDatalayer'
import { handleErrors } from '#utils/handleErrors'

export const checkout_steps = async (step: IEventEnhanced.CheckoutEvents, onlyLastEvent?: boolean) => {
  it(step, async () => {

    return await getEventFromDataLayer(step, onlyLastEvent)
    .then(events => handleErrors(events))
  })
}