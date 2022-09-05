
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
