const { driver } = require('./config.ts')

const handleErrors = async (events) => {
  if(events?.length < 1) throw new Error(`No se ha encontrado este evento, ${JSON.stringify(events)}`)
}

exports.handleErrors = handleErrors