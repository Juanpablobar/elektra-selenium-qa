import { IEventEnhanced } from '#typings/events'
import { getEventFromDataLayer } from '#utils/getDatalayer'
import { handleErrors } from '#utils/handleErrors'

export const view_item_list = async () => {
  it("view_item_list", async () => {

    await getEventFromDataLayer(IEventEnhanced.Events.view_item_list)
    .then(events => handleErrors(events))

  })
}