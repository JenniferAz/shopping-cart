import { browser, by, element } from 'protractor'

export class CartPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>
  }

  getTitleText() {
    return element(by.css('app-cart section h1')).getText() as Promise<string>
  }
}
