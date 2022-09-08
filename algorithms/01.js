const arr01 = [[3, 2, 5, 4, 1, 6], 7, [10, 9, 8]];

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

quickSort(arr01);

console.log(quickSort(arr01));

let a = [[[2, 1], 3, [5, 4, 6]], 7, [[9, 8], 10, []]]; // есть

let b = [[2, 1], 3, [5, 4, 6], 7, [9, 8], 10]; // надо

let d = [[2, 1], 3, [5, 4, 6], 7, [9, 8], 10];

let c = [[2, 1], 3, [5, 4, 6], 7, [9, 8], 10, []];

let res0 = [[2, 1], 3, [5, 4, 6]];

let res1 = 7;

let res2 = [[9, 8], 10, []];

// функция принимает массив с массивами, внутрь которых вложены массивы, числами и пустыми массивами
// возвращает массив с массивами первого уровня вложенности, числами, пустые массивы убирает

/* const robo = (arr) => {
  let result = arr.filter((item) => {
    if ((typeof item === "object" && item.length > 0) || item === "number") {
      return true;
    }
    return false;
  });

  return result;
}; */

/* const robo = (arr) => {
  let result = arr.filter((item) => {
    if (item.length !== 0) return true;
  });

  return result;
}; */

const hobo = (arr) => {
  let result = [];
  for (let i = 0; i <= arr.length; i++) {
    const currentEl = arr[i];
    if (Array.isArray(currentEl)) {
      result.push(...hobo(...currentEl));
    } else {
      result.push(currentEl);
    }
  }
  return result;
};

let ddd = [[2, 1], 3, [5, 4, 6], 7, [9, 8], 10, []];
