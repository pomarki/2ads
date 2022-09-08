const mergeArr = (arrLeft, arrRight) => {
  const arrMerged = [];

  while (true) {
    if (arrLeft[0] < arrRight[0]) {
      arrMerged.push(arrLeft[0]);
      arrLeft.splice(0, 1);
      if (arrLeft.length === 0) {
        arrMerged.push(arrRight.slice(0, arrRight.length));
        return arrMerged.flat();
      }
    } else {
      arrMerged.push(arrRight[0]);
      arrRight.splice(0, 1);
      if (arrRight.length === 0) {
        arrMerged.push(arrLeft.slice(0, arrLeft.length));
        return arrMerged.flat();
      }
    }
  }
};

const convertArr = (arr) => {
  let result = arr.map((item) => {
    return [item];
  });
  return result;
};

const mergeSort = (arr, { iterations }) => {
  if (iterations === 0) {
    arr = convertArr(arr);
  }

  let result = [];

  while (true) {
    if (typeof arr[0] === "undefined") {
      return result;
    }
    if (typeof arr[1] === "undefined") {
      result.push(arr[0]);
      return result;
    }
    result.push(mergeArr(arr[0], arr[1]));
    arr.splice(0, 2);
  }
};

export { mergeSort };