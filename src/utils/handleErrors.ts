import { IEventEnhanced } from '#typings/events'
import { validateEventStructure } from './validateEventStructure'

export const handleErrors = async (events: IEventEnhanced.MapEvents[]) => {
  if(events?.length < 1) throw new Error(`No se ha encontrado este evento, ${JSON.stringify(events)}`)
    
  const { isCorrect, message } = validateEventStructure(events)
  if(!isCorrect) throw new Error(message)

}