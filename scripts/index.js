import { getMainArr } from "./utils.js";
import {
  colorArr,
  mainScreen,
  mixButton,
  sortButton,
  referenceArray,
  screen,
} from "./data.js";
let mixedArr = [];

const clearScreen = () => {
  screen.clearRect(0, 0, mainScreen.width, mainScreen.height);
};

const renderRow = (arr) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    let color = colorArr[Math.floor(arr[i] / 20)];
    screen.fillStyle = color;
    screen.fillRect(i * 9 + 40, 10, 3, arr[i] * 2);
  }
};

const renderMixRow = () => {
  let arr = getMainArr(referenceArray);
  clearScreen();
  renderRow(arr);
  arr.splice(0, 100);
};

const renderSortRow = () => {
  let sorted = setInterval(() => {
    for (let i = 0; i <= 15; i++) {
      renderMixRow();
    }
   
  }, 2000);
  /* clearInterval(sorted); */
};

mixButton.addEventListener("click", () => renderMixRow());
sortButton.addEventListener("click", () => renderSortRow());
