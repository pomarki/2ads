import { getReferenceArr } from "./utils.js";

import { bogoSort, bubbleSort, shakerSort } from "../algorithms/index.js";
const colorArr = ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"];
const mainScreen = document.getElementById("main-screen");
const mixButton = document.getElementById("mix-button");
const sortButton = document.getElementById("sort-button");
const iterationWindow = document.getElementById("iteration-window");
const closeButton = document.getElementById("close-button");
const actualCard = document.querySelector(".card__container");
const mainList = document.querySelector(".main__list");
const referenceArray = getReferenceArr();
let screen = mainScreen.getContext("2d");
mainScreen.width = 970;
mainScreen.height = 301;
const PAUSE_DURATION = 150;

const initialCards = [
  { id: 1, title: "пузырек", method: bubbleSort, weight: 1 },
  { id: 2, title: "шейкер", method: shakerSort, weight: 2 },
  { id: 3, title: "расческа", method: bubbleSort, weight: 1 },
  { id: 4, title: "вставка", method: bubbleSort, weight: 1 },
  { id: 5, title: "выбор", method: bubbleSort, weight: 1 },
  { id: 6, title: "быстрая", method: bubbleSort, weight: 1 },
  { id: 7, title: "слияние", method: bubbleSort, weight: 1 },
  { id: 8, title: "пирамидальная", method: bubbleSort, weight: 1 },
  { id: 9, title: "богосорт", method: bogoSort, weight: 1 },
];

export {
  colorArr,
  mainScreen,
  mixButton,
  sortButton,
  closeButton,
  iterationWindow,
  actualCard,
  mainList,
  referenceArray,
  screen,
  initialCards,
  PAUSE_DURATION,
};
