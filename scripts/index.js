import {
  getMainArr,
  checkRow,
  disableButton,
  enableButton,
  closeCard,
  openCard,
  getId,
  getMethodById,
} from "./utils.js";
import {
  colorArr,
  mainScreen,
  mixButton,
  sortButton,
  closeButton,
  actualCard,
  iterationWindow,
  mainList,
  referenceArray,
  screen,
  initialCards,
  PAUSE_DURATION,
} from "./data.js";

/* import { bubbleSort } from "./bubble.js"; */
import { Link } from "../components/LinkCard.js";

let mixedArr = [];
let intermediateArr = [];
let iterations = 0;
let sorted;
let sortMethod;
let sortButtonActive = true;

const clearScreen = (item) => {
  item.clearRect(0, 0, mainScreen.width, mainScreen.height);
};

const stopRender = (func) => {
  sortButtonActive = !sortButtonActive;
  sortButton.textContent = "sort";
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
  clearScreen(screen);
  renderRow(mixedArr);
  enableButton(sortButton);
};

const sortedArr = () => {
  sortButtonActive = !sortButtonActive;
  sorted = setInterval(() => {
    clearScreen(screen);
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
closeButton.addEventListener("click", () => {
  closeCard(actualCard);
});

initialCards.forEach((item) => {
const cardButton = new Link(item);
const buttonElement = cardButton.generateCard();

mainList.append(buttonElement);

})


mainList.addEventListener("click", (e) => {openCard(e, actualCard, initialCards)});