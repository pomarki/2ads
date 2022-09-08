const arr01 = [1, 2, [3, 4], 5, [6, 7, 8, 9, 10], 11];


const sortItem = (arr, pivot) => {
  let before = [];
  let after = [];
  let result = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (pivot > arr[i]) {
      before.push(arr[i]);
    } else {
      after.push(arr[i]);
    }
  }
  result.push(before, pivot, after);

  return result;
};

const filterItem = (arr) => {
  let result = arr.filter((item) => {
    if (item.length !== 0) return true;
  });

  return result;
};

const quickSort = (arr) => {
  let subTotal = arr.map((item) => {
    if (Array.isArray(item)) {
      item = sortItem(item.slice(1, item.length), item[0]);
    }

    return item;
  });
  let result = filterItem(subTotal.flat(1));

  return result;
};

const foo = (arr) => {
  let subTotal = arr.slice();
  let myArr = [];
  let maxItem = Math.max.apply(null, subTotal);
  let maxItemIndex = indexOf(maxItem);
  let beforeArr = subTotal.slice(0, maxItemIndex);
  let afterArr = subTotal.slice(maxItemIndex, subTotal.length);
  myArr = myArr.push(beforeArr, maxItem, afterArr);
};

export { quickSort };
