const bubbleSort = (arr) => {
  let subTotal = arr.slice();
  for (let i = 0; i <= subTotal.length - 2; i++) {
    if (subTotal[i] > subTotal[i + 1])
      subTotal.splice(i, 2, subTotal[i + 1], subTotal[i]);
  }
  return subTotal;
};

export { bubbleSort };
