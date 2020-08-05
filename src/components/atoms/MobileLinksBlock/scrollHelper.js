const getWrapperCenter = (navWrapper, currentItem) => {
  const navWrapperWidth = navWrapper.getBoundingClientRect().width;
  const navWrapperMiddle = navWrapperWidth / 2;
  const selectedItemLeft = currentItem.offsetLeft;
  const selectedItemWidth = currentItem.getBoundingClientRect().width;
  const selectedItemMiddle = selectedItemWidth / 2;

  return selectedItemLeft - navWrapperMiddle + selectedItemMiddle;
};

export default getWrapperCenter;
