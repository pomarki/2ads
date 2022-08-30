

const shakerSort = (arr) => {
  let subTotal = arr.slice();

  
    for (let i = 0; i <= subTotal.length - 2; i++) {
      if (subTotal[i] > subTotal[i + 1])
        subTotal.splice(i, 2, subTotal[i + 1], subTotal[i]);
        
    }
    for (let i = subTotal.length - 1; i >= 0; i--) {
        if (subTotal[i] < subTotal[i - 1])
          subTotal.splice(i - 1, 2, subTotal[i], subTotal[i - 1]);
          
      }
      
  
  return subTotal;
};

export { shakerSort };
