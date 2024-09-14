import { getEventFromDataLayer } from '../../utils/getDatalayer'
import { handleErrors } from '../../utils/handleErrors'

export const view_item = async () => {
  it("view_item", async () => {

    await getEventFromDataLayer('view_item')
    .then(events => handleErrors(events))
  }
)}