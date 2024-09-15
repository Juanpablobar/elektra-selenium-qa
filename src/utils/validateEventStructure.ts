import { Schemas } from '#schemas/schemas'

export const validateEventStructure = (event) => {

  const eventName = event?.[0]?.event
  const receivedEvent = event?.[0]
  const eventsSchemas = new Schemas()
  const getSchemaForThisEvent = eventsSchemas?.[eventName]

  if(!getSchemaForThisEvent) return {
      isCorrect: false,
      message: `No existe el schema para el evento '${eventName}'`
  }

  const eventSchema = getSchemaForThisEvent()
  
  for (const key in eventSchema) {

    const { required, type, values, shouldNot } = eventSchema[key]

    const existField = !required ? true : receivedEvent[key]
    const isType = typeof receivedEvent[key] === type
    const isValue = values?.length < 1 ? true : values?.includes(receivedEvent[key])
    const isIncorrectValue = shouldNot?.length < 1 ? false : shouldNot?.includes(receivedEvent[key])
    
    if(!existField) return {
      isCorrect: false,
      message: `El parámetro '${key}', es obligatorio en este evento'`
    }

    if(!isType) return {
      isCorrect: false,
      message: `El tipo de dato es incorrecto para el parámetro '${key}', se está recibiendo un '${typeof receivedEvent[key]}' cuando se esperaba recibir un '${type}'`
    }

    if(!isValue) return {
      isCorrect: false,
      message: `El valor del parámetro '${key}' no es válido. Se recibio '${receivedEvent[key]}' mientras que se esperaba recibir alguno de los siguientes valores: '${values?.join(',')}'`
    }

    if(isIncorrectValue) return {
      isCorrect: false,
      message: `Se recibió un valor no permitido para el parámetro '${key}':  '${receivedEvent[key]}'`
    }

  }

  return {
    isCorrect: true,
    messages: ''
  }
}