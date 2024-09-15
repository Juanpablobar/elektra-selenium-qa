import { setUrl } from '#utils/config'
import { view_item } from './view_item'
import { add_to_cart_PDP } from './add_to_cart'
import { view_cart } from '#globals/view_cart'

export const pdp = (url) => {
  describe('events to execute on pdp', async () => {

    url && it('PDP', async () => await setUrl(url))
  
    view_item()
    add_to_cart_PDP()
    view_cart(true)
  })
}