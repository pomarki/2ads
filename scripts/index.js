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

import { bubbleSort } from "./bubble.js";

let mixedArr = [];
let intermediateArr = [];
let iterations = 0;

const clearScreen = () => {
  screen.clearRect(0, 0, mainScreen.width, mainScreen.height);
};

const stopRender = (func) => {
  clearInterval(func);
};

const disableButton = (buttonId) => {
  buttonId.classList.add("card__button_type_inactive");
  buttonId.removeEventListener("click", renderMixRow);
}

const enableButton = (buttonId) => {
  buttonId.classList.remove("card__button_type_inactive");
  mixButton.addEventListener("click", renderMixRow);
}

const switchButton = (buttonId) => {

}


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
  
};

const renderSortRow = () => {
  disableButton(mixButton);
  intermediateArr.length === 0
    ? (intermediateArr = mixedArr.slice())
    : intermediateArr;

  let sorted = setInterval(() => {
    clearScreen();
    intermediateArr = bubbleSort(intermediateArr);
    renderRow(intermediateArr);
    iterations++;

    iterationWindow.textContent = iterations;
    
    if (checkRow(intermediateArr)) {
      stopRender(sorted);
      intermediateArr.splice(0, 100)
      iterations = 0;
      enableButton(mixButton);
      return;
    }
  }, 150);

  stopButton.addEventListener("click", () => {
    stopRender(sorted);
  });
};

enableButton(mixButton);

/* mixButton.addEventListener("click", () => renderMixRow()); */
sortButton.addEventListener("click", () => renderSortRow());
