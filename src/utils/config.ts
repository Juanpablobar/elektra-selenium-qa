require('dotenv').config()
import { Builder, Browser } from 'selenium-webdriver'
import chrome from 'selenium-webdriver/chrome'

const workspaceEnv = process.env.WORKSPACE || ''
const vtexIdclientAutCookie = process.env.VTEXIDCLIENTAUTCOOKIE

//Configuracion de navegador
const options = new chrome.Options()
options.addArguments("--start-maximized"); 
options.addExtensions(['./extensions/analytics-debugger.crx'])

export const driver = new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeOptions(options)
    .setCapability('goog:loggingPrefs', { 'browser':'ALL' })
    .build()


// Función para ingresar a la url de prueba y setear cookies de acceso
export const setUrl = async (url = workspaceEnv) => {
    await driver.get(url)
    await driver
    .manage()
    .addCookie({ name: 'VtexIdclientAutCookie', value: vtexIdclientAutCookie });
    await driver.sleep(1000)
}