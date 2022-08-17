import { getMainArr, checkRow } from "./utils.js";
import {
  colorArr,
  mainScreen,
  mixButton,
  sortButton,
  stopButton,
  referenceArray,
  screen,
} from "./data.js";
let mixedArr = [];

const clearScreen = () => {
  screen.clearRect(0, 0, mainScreen.width, mainScreen.height);
};

const stopRender = (func) => {
  clearInterval(func);
}

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
    
      renderMixRow();
    
   
  }, 1000);
  stopButton.addEventListener("click", ()=> {stopRender(sorted)});
};

mixButton.addEventListener("click", () => renderMixRow());
sortButton.addEventListener("click", () => renderSortRow());

