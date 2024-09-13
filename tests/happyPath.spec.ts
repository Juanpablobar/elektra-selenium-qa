const { home } = require('./home/home.ts')
const { plp } = require('./plp/plp.ts')
const { pdp } = require('./pdp/pdp.ts')

const executeHappyPath = async () => {
  home()
  pdp()
  plp()
}

executeHappyPath()
