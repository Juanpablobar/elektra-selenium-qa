import { logging } from 'selenium-webdriver'
import addContext from 'mochawesome/addContext';

import { driver } from './config'
import { IEventEnhanced } from '#typings/events';

const timeOutBetweenFectchs: number = Number(process.env.TIMEOUTBETWEENFETCHS)

export const printDataLayer = async () => {
  const scriptToPrintDataLayer = (): string => `console.log('selenium-datalayer', JSON.stringify(window?.dataLayer?.filter(item => !item?.event?.includes('gtm'))))`
  await driver.sleep(timeOutBetweenFectchs)
  await driver.executeScript(scriptToPrintDataLayer());
}

export const getDataLayer = async () => {
  await printDataLayer()
  return await driver
  .manage()
  .logs()
  .get(logging.Type.BROWSER)
  .then((logs: any) => {
    const message = logs?.filter((item: any) => item?.message?.includes('selenium-datalayer'))
    const datalayer = JSON.parse(JSON.parse(message[0]?.message?.split(`"selenium-datalayer"`)?.[1]))
    return datalayer;
  });
}

export const getEventFromDataLayer = async (event: IEventEnhanced.Events | IEventEnhanced.CheckoutEvents, onlyLast: boolean = true) => {
  return await getDataLayer()
    .then(async datalayer => {
      let filterEvents = datalayer?.filter((item: any) => item?.event === event)
      if(onlyLast && filterEvents?.length > 1){
        const getLatestId = Math.max(...filterEvents?.map((item: any) => item?.['gtm.uniqueEventId']))
        const findLatestEvent = filterEvents?.find((item: any) => item?.['gtm.uniqueEventId'] === getLatestId)
        filterEvents = findLatestEvent
      }
      afterEach(function () {
        addContext(this, JSON.stringify(filterEvents));
      });
      console.log(filterEvents)
      return filterEvents
    })
}