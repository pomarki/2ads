import { getMainArr, checkRow } from "./utils.js";
import {
  colorArr,
  mainScreen,
  mixButton,
  sortButton,
  stopButton,
  iterationWindow,
  referenceArray,
  screen,
} from "./data.js";

import { combArr } from "./bubble.js";

let mixedArr = [];
let intermediateArr = [];
let iterations = 0;

const clearScreen = () => {
  screen.clearRect(0, 0, mainScreen.width, mainScreen.height);
};

const stopRender = (func) => {
  clearInterval(func);
};

const renderRow = (arr) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    let color = colorArr[Math.floor(arr[i] / 20)];
    screen.fillStyle = color;
    screen.fillRect(i * 9 + 40, 10, 3, arr[i] * 2);
  }
};

const renderMixRow = () => {
  mixedArr = getMainArr(referenceArray);
  clearScreen();
  renderRow(mixedArr);
  /* mixedArr.splice(0, 100); */
};

const renderSortRow = () => {
  intermediateArr.length === 0
    ? (intermediateArr = mixedArr.slice())
    : intermediateArr;

  let sorted = setInterval(() => {
    clearScreen();
    intermediateArr = combArr(intermediateArr);
    renderRow(intermediateArr);
    iterations++;

    iterationWindow.textContent = iterations;
    if (checkRow(intermediateArr)) {
      stopRender(sorted);
      intermediateArr.splice(0, 100)
      iterations = 0;
      return;
    }
  }, 150);

  stopButton.addEventListener("click", () => {
    stopRender(sorted);
  });
};

mixButton.addEventListener("click", () => renderMixRow());
sortButton.addEventListener("click", () => renderSortRow());
