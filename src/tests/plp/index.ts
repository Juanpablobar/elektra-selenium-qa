import { setUrl } from '#utils/config'
import { view_item_list } from './view_item_list'
import { select_item_PLP } from './select_item'
import { view_cart } from '#globals/view_cart'

const workspace = process.env.WORKSPACE || ''
const plpUrl = process.env.PLP || ''

export const plp = () => {
  describe('events to execute on plp', async () => {

    it('PLP', async () => await setUrl(workspace + plpUrl))
  
    view_item_list()
    view_cart()
    select_item_PLP()
  })
}