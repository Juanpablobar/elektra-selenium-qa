const selectRandomItem = (numberOfElements) => {
  return Math.trunc(Math.random() * (numberOfElements - 0));
}

exports.selectRandomItem = selectRandomItem