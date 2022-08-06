let initialArr = [3, 38, 5, 44, 15, 36, 26, 27, 2, 46, 47, 4, 19, 50, 48];
let iterations = 0;
const checkRow = (arr) => {
  for (i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};

const sortRow = (arr) => {
  let result = arr.slice();

  while (!checkRow(result)) {
    for (i = 0; i <= result.length - 2; i++) {
      iterations++;
      if (result[i] > result[i + 1])
        result.splice(i, 2, result[i + 1], result[i]);
    }
  }

  return result;
};

console.log(sortRow(initialArr), `итераций: ${iterations}`);
