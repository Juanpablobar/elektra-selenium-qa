const view_item_schema = () => {
  return {
    event: {
      type: 'string',
      values: [],
      shouldNot: [],
      required: true
    },
  }

}

exports.view_item_schema = view_item_schema