import { IEventEnhanced } from '#typings/events'
import { getEventFromDataLayer } from '#utils/getDatalayer'
import { handleErrors } from '#utils/handleErrors'

export const view_item = async () => {
  it("view_item", async () => {

    await getEventFromDataLayer(IEventEnhanced.Events.view_item)
    .then(events => handleErrors(events))
  }
)}