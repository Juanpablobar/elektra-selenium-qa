const { driver } = require('./config.ts')
const { validateEventStructure } = require('./validateEventStructure.ts')

const handleErrors = async (events) => {
  if(events?.length < 1) throw new Error(`No se ha encontrado este evento, ${JSON.stringify(events)}`)
    
  const { isCorrect, message } = await validateEventStructure(events)
  if(!isCorrect) throw new Error(message)

}

exports.handleErrors = handleErrors