import { view_cart_schema } from './view_cart'
import { view_item_schema } from './view_item'

export class Schemas {
  view_cart = () => view_cart_schema()
  view_item = () => view_item_schema()
}