const change = (arr, a, b) => {
  // а и b - индексы
  let first = arr[a];
  let second = arr[b];

  arr.splice(a, 1, second);
  arr.splice(b, 1, first);
  return arr;
};

const combSort = (arr, step) => {
  let subTotal = arr.slice();
  /* step = Math.trunc(step / 1.247); */

  for (let i = 0; i + step <= subTotal.length - 1; i++) {
    let a = subTotal[i];
    let b = subTotal[i + step];

    if (a > b) {
      change(subTotal, i, i + step);
    }
  }

 /*  step = Math.trunc(step / 1.247); */
  return subTotal;
};

export { combSort };
