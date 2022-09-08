const a = [2, 3, 7, 10];
const b = [1, 4, 5, 9];


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

console.log(mergeArr(a, b));

// i = 0, j = 0
// 0 < 8
// a[0] b[0] 2 > 1
// [1]
// i = 0, j = 1

// 1 < 8
// a[0] b[1] 2 < 4
// [1, 2]
// i = 1, j = 1

// 2 < 8
// a[1] b[1] 3 < 4
// [1, 2, 3]
// i = 2 j = 1

// 3 < 8
// a[2] b[1] 7 > 4
// [1, 2, 3, 4]
// i = 2 j = 2

// 4 < 8
// a[2] b[2] 7 > 5
// [1, 2, 3, 4, 5]
// i = 2 j = 3

// 5 < 8
// a[2] b[2] 7 < 9
// [1, 2, 3, 4, 5, 7]
// i = 2 j = 4

// 6 < 8
// a[2] b[4] 7 и undefined
