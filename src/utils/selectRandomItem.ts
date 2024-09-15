import { WebElement } from "selenium-webdriver";

export const selectRandomItem = (numberOfElements: number): number => {
  return Math.trunc(Math.random() * (numberOfElements - 0));
}

export const selectRandomItemVisible = async (elements: WebElement[]): Promise<WebElement> => {
  let isVisible = false
  let visibleItem: WebElement | any = {}
  while(!isVisible){
    const randomItem = selectRandomItem(elements?.length);
    await elements[randomItem]?.isDisplayed().then(res => isVisible = res)
    visibleItem = elements[randomItem]
  }
  
  return visibleItem
}