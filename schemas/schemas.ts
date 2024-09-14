const { view_cart_schema } = require('./view_cart.ts')
const { view_item_schema } = require('./view_item.ts')

class Schemas {
  view_cart = () => view_cart_schema()
  view_item = () => view_item_schema()
}

exports.Schemas = Schemas