const { logging } = require('selenium-webdriver')
const { driver } = require('./config.ts')

const timeOutBetweenFectchs = process.env.TIMEOUTBETWEENFETCHS

const printDataLayer = async () => {
  await driver.sleep(timeOutBetweenFectchs)
  await driver.executeScript(`console.log('selenium-datalayer', JSON.stringify(window?.dataLayer?.filter(item => !item?.event?.includes('gtm'))))`);
}

const getDataLayer = async () => {
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

const getEventFromDataLayer = async (event) => {
  return await getDataLayer()
    .then(async datalayer => {
      const filterEvents = datalayer?.filter(item => item?.event === event)
      console.log(filterEvents)
      return filterEvents
    })
}

exports.printDataLayer = printDataLayer
exports.getDataLayer = getDataLayer
exports.getEventFromDataLayer = getEventFromDataLayer