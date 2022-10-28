const a = [7, 10, 3, 2, 5, 4, 1, 9, 8, 6];

const getHeap = (arr) => {
  let result = [];
  let index = arr.length - 1;

  while (true) {
    if (arr.length === 0) {
      return result;
    }
    result.push(arr[index]);
    arr.splice(1, index);
  }
};

// куча
// 0 проверяем, что длина стартового массива [STA] > 0
// 1 берём последний элемент (LE) [STA] и кладём его в конец результата [RES]
// 2 отправляем RES и индекс в функцию bubble 
// 3 
// 4 если RE < LE - возвращаемся на 0

const bubble = (arr, currentIndex) => {
  // принимает массив и индекс элемента, который надо проставить на место
  // возвращает массив с элементом, стоящим на месте

  let result = arr.slice();
  let parentIndex = Math.floor((currentIndex + 1) / 2 - 1);

  if (parentIndex < 0) {
    return result;
  }
  let current = result[currentIndex];
  let parent = result[parentIndex];
  if (current > parent) {
    return result;
  } else {
    result[parentIndex] = current;
    result[currentIndex] = parent;
  }

  return bubble(result, parentIndex);
};

const makeHeap = (arr) => {
  let current = arr.slice();
  let result = [];
  for (let i = current.length - 1; i >= 0; i--) {
    let el = current.pop();
    result.push(el);
    result = bubble(result, i);
  }
  return result;
};

const swapElements = (arr, elIndex) => {};


