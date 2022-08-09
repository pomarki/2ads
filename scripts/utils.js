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

export { getReferenceArr, getMainArr };
