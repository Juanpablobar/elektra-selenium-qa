const { view_cart_schema } = require('./view_cart')
const { view_item_schema } = require('./view_item')

class Schemas {
  view_cart = () => view_cart_schema()
  view_item = () => view_item_schema()
}

exports.Schemas = Schemas