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
  infoButton,
  actualCard,
  iterationWindow,
  mainList,
  referenceArray,
  screen,
  initialCards,
  popupe,
  PAUSE_DURATION,
} from "./data.js";

import { Link } from "../components/LinkCard.js";

let mixedArr = [];
let intermediateArr = [];
let iterations = 0;
let iterationsWeight = 0;
let sorted;
let sortMethod;
let sortButtonActive = true;
let pauseDuration;

const clearScreen = (item) => {
  item.clearRect(0, 0, mainScreen.width, mainScreen.height);
};

const stopRender = (func) => {
  sortButtonActive = !sortButtonActive;
  sortButton.textContent = "sort";
  clearInterval(func);
};

const renderRow = (arr) => {
  let renderedArr = arr.flat();
  for (let i = 0; i <= renderedArr.length - 1; i++) {
    let color = colorArr[Math.floor(renderedArr[i] / 20)];
    screen.fillStyle = color;
    screen.fillRect(i * 9 + 40, 10, 3, renderedArr[i] * 2);
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
  let step = Math.trunc(intermediateArr.length);
  sorted = setInterval(() => {
    clearScreen(screen);
    step = Math.trunc(step / 1.247);
    intermediateArr = sortMethod(intermediateArr, {
      step: step,
      iterations: iterations,
    });
    renderRow(intermediateArr);
    iterations++;
    sortButton.textContent = "stop";
    iterationWindow.textContent = iterations * iterationsWeight;

    if (checkRow(intermediateArr.flat())) {
      stopRender(sorted);
      intermediateArr.splice(0, 100);
      iterations = 0;
      enableButton(mixButton);
      disableButton(sortButton);
      sortButton.textContent = "sort";
      return;
    }
  }, pauseDuration);
};

const renderSortRow = () => {
  disableButton(mixButton);
  intermediateArr.length === 0
    ? (intermediateArr = mixedArr.slice())
    : intermediateArr;
  sortButtonActive ? sortedArr() : stopRender(sorted);
};

const openMethodCard = (e) => {
  openCard(actualCard);
  openCard(popupe);
  const idItem = getId(e.target.id);
  mixedArr = mixedArr.slice();
  sortMethod = getMethodById(initialCards, idItem, "method");
  iterationsWeight = getMethodById(initialCards, idItem, "weight");
  pauseDuration = getMethodById(initialCards, idItem, "pauseDuration");

};

mixButton.addEventListener("click", renderMixRow);
sortButton.addEventListener("click", renderSortRow);
closeButton.addEventListener("click", () => {
  closeCard(actualCard);
  closeCard(popupe);
});

// рендеринг карточек с названиями алгоритмов сортировки
initialCards.forEach((item) => {
  const cardButton = new Link(item);
  const buttonElement = cardButton.generateCard();

  mainList.append(buttonElement);
});

mainList.addEventListener("click", (e) => {
  openMethodCard(e);
});
