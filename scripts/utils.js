const getReferenceArr = () => {
  let result = [];
  for (let i = 1; i <= 100; i++) {
    result.push(i);
  }
  return result;
};

const getMainArr = (arr) => {
  let currentReferenceArr = arr.slice();
  let result = [];
  for (let i = 1; i <= 100; i++) {
    let arrLength = currentReferenceArr.length;
    let position = Math.floor(Math.random() * arrLength);
    let newItem = currentReferenceArr.splice(position, 1)[0];
    result.push(newItem);
  }

  return result;
};

const checkRow = (arr) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};

export { getReferenceArr, getMainArr, checkRow };
