const bubbleSort = (arr, { iterations }) => {
  let subTotal = arr.slice();
  let rate = Math.trunc(iterations / 100) * 100;

  if (subTotal[iterations - rate] > subTotal[iterations - rate + 1]) {
    subTotal.splice(
      iterations - rate,
      2,
      subTotal[iterations - rate + 1],
      subTotal[iterations - rate]
    );
  }

  return subTotal;
};

export { bubbleSort };
