import { logging } from 'selenium-webdriver'
import addContext from 'mochawesome/addContext';

import { driver } from './config'

const timeOutBetweenFectchs = process.env.TIMEOUTBETWEENFETCHS

export const printDataLayer = async () => {
  await driver.sleep(timeOutBetweenFectchs)
  await driver.executeScript(`console.log('selenium-datalayer', JSON.stringify(window?.dataLayer?.filter(item => !item?.event?.includes('gtm'))))`);
}

export const getDataLayer = async () => {
  await printDataLayer()
  return await driver
  .manage()
  .logs()
  .get(logging.Type.BROWSER)
  .then(logs => {
    const message = logs?.filter(item => item?.message?.includes('selenium-datalayer'))
    const datalayer = JSON.parse(JSON.parse(message[0]?.message?.split(`"selenium-datalayer"`)?.[1]))
    return datalayer;
  });
}

export const getEventFromDataLayer = async (event, onlyLast = true) => {
  return await getDataLayer()
    .then(async datalayer => {
      let filterEvents = datalayer?.filter(item => item?.event === event)
      if(onlyLast && filterEvents?.length > 1){
        const getLatestId = Math.max(...filterEvents?.map(item => item?.['gtm.uniqueEventId']))
        const findLatestEvent = filterEvents?.find(item => item?.['gtm.uniqueEventId'] === getLatestId)
        filterEvents = findLatestEvent
      }
      afterEach(function () {
        addContext(this, JSON.stringify(filterEvents));
      });
      console.log(filterEvents)
      return filterEvents
    })
}