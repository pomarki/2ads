const a = [1, 3, 2, 4, 6, 5];

const insertionSort = (arr, { iterations }) => {
  let subTotal = arr.slice();

  let beforeArr = subTotal.slice(0, iterations + 1).sort((a, b) => {
    return a - b;
  });
  let afterArr = subTotal.slice(iterations + 1, arr.length);
  subTotal = beforeArr.concat(afterArr);

  return subTotal;
};

export { insertionSort };
