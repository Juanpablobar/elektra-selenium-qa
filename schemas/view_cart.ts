const view_cart_schema = () => {
  return {
    event: {
      type: 'string',
      values: ['view_cart'],
      shouldNot: [''],
      required: true
    },
  }

}

exports.view_cart_schema = view_cart_schema