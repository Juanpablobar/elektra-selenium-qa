import { getEventFromDataLayer } from '../../utils/getDatalayer'
import { handleErrors } from '../../utils/handleErrors'

export const view_item_list = async () => {
  it("view_item_list", async () => {

    await getEventFromDataLayer('view_item_list')
    .then(events => handleErrors(events))

  })
}