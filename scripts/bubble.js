let initialArr = [3, 38, 5, 44, 15, 36, 26, 27, 2, 46, 47, 4, 19, 50, 48];

let iterations = 0;

const checkRow = (arr) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};

const combArr = (arr) => {
  let subTotal = arr.slice();
  for (let i = 0; i <= subTotal.length - 2; i++) {
    if (subTotal[i] > subTotal[i + 1])
      subTotal.splice(i, 2, subTotal[i + 1], subTotal[i]);
  }
  return subTotal;
};

const sortRow = (arr) => {
  let result = arr.slice();

  while (!checkRow(result)) {
    result = combArr(result);
  }

  return result;
};

export { combArr };
