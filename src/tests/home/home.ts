import { setUrl } from '#utils/config'
import { view_cart } from '#globals/view_cart'
import { select_item_HOME } from './select_item'

const workspace = process.env.WORKSPACE || ''

export const home = () => {
  describe('events to execute on home', async () => {

    it('home', async () => await setUrl(workspace))
  
    view_cart()
    select_item_HOME()
  })
}