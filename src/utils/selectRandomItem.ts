export const selectRandomItem = (numberOfElements) => {
  return Math.trunc(Math.random() * (numberOfElements - 0));
}

export const selectRandomItemVisible = async (elements) => {
  let isVisible = false
  let visibleItem = {}
  while(!isVisible){
    const randomItem = selectRandomItem(elements?.length);
    await elements[randomItem]?.isDisplayed().then(res => isVisible = res)
    visibleItem = elements[randomItem]
  }

  return visibleItem
}