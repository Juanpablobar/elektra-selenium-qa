const { plp } = require('./plp/plp.ts')
const { pdp } = require('./pdp/pdp.ts')

const executeHappyPath = async () => {
  await pdp()
  await plp()
}

executeHappyPath()
