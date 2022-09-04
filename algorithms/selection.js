const selectionSort = (arr, { iterations }) => {

  let subTotal = arr.slice();
  let rate = Math.trunc(iterations / 100) * 100;
  let step = iterations - rate;

  let sortedArr = subTotal.slice(0, step + 1);
  let unsortedArr = subTotal.slice(step + 1, subTotal.length);

  let currentItem = subTotal[step];
  let currentItemIndex = subTotal.indexOf(currentItem)
  let minItem = Math.min.apply(null, unsortedArr);
  let minItemIndex = unsortedArr.indexOf(minItem);


  if (minItem < currentItem) {
    unsortedArr[minItemIndex] = currentItem;
    sortedArr[currentItemIndex] = minItem;
  }

  subTotal = sortedArr.concat(unsortedArr);


  return subTotal;
};

export { selectionSort };
