/* const shakerSort = (arr, { iterations }) => {
  let subTotal = arr.slice();
  let rate = Math.trunc(iterations / 100) * 100;
  let direction = iterations % 2 === 0;

  if (direction) {
    for (let i = 0; i <= subTotal.length - 2; i++) {
      if (subTotal[i] > subTotal[i + 1])
        subTotal.splice(i, 2, subTotal[i + 1], subTotal[i]);
    }
  } else {
    for (let i = subTotal.length - 1; i >= 0; i--) {
      if (subTotal[i] < subTotal[i - 1])
        subTotal.splice(i - 1, 2, subTotal[i], subTotal[i - 1]);
    }
  }

  return subTotal;
}; */

const shakerSort = (arr, { iterations }) => {
  let subTotal = arr.slice();
  let rate = Math.trunc(iterations / 100) * 100;
  let direction = rate % 2 === 0;
  let step = iterations - rate;
  let length = subTotal.length - 1;

  if (direction) {
    if (subTotal[iterations - rate] > subTotal[iterations - rate + 1]) {
      subTotal.splice(
        iterations - rate,
        2,
        subTotal[step + 1],
        subTotal[step]
      );
      
    } else {
      if (subTotal[length - 1 - step] > subTotal[length - step])
        subTotal.splice(
          length - 1 - step,
          2,
          subTotal[length - step],
          subTotal[length - 1 - step]
        );
        
    }

    return subTotal;
  }
};

export { shakerSort };
