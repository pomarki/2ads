import { getMainArr, checkRow } from "./utils.js";
import {
  colorArr,
  mainScreen,
  mixButton,
  sortButton,
  iterationWindow,
  referenceArray,
  screen,
  PAUSE_DURATION,
} from "./data.js";

import { bubbleSort } from "./bubble.js";

let mixedArr = [];
let intermediateArr = [];
let iterations = 0;
let sorted;
let sortButtonActive = true;

const clearScreen = () => {
  screen.clearRect(0, 0, mainScreen.width, mainScreen.height);
};

const stopRender = (func) => {
  sortButtonActive = !sortButtonActive;
  sortButton.textContent = "sort";
  clearInterval(func);
};

const disableButton = (buttonId) => {
  buttonId.classList.add("card__button_type_inactive");
  buttonId.disabled = true;
};

const enableButton = (buttonId) => {
  buttonId.classList.remove("card__button_type_inactive");
  buttonId.disabled = false;
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
  enableButton(sortButton);
};

const sortedArr = () => {
  sortButtonActive = !sortButtonActive;
  sorted = setInterval(() => {
    clearScreen();
    intermediateArr = bubbleSort(intermediateArr);
    renderRow(intermediateArr);
    iterations++;
    sortButton.textContent = "stop";
    iterationWindow.textContent = iterations;

    if (checkRow(intermediateArr)) {
      stopRender(sorted);
      intermediateArr.splice(0, 100);
      iterations = 0;
      enableButton(mixButton);
      disableButton(sortButton);
      sortButton.textContent = "sort";
      return;
    }
  }, PAUSE_DURATION);
};

const renderSortRow = () => {
  disableButton(mixButton);
  intermediateArr.length === 0
    ? (intermediateArr = mixedArr.slice())
    : intermediateArr;
  sortButtonActive ? sortedArr() : stopRender(sorted);
};

mixButton.addEventListener("click", renderMixRow);
sortButton.addEventListener("click", renderSortRow);
