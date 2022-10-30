import { getReferenceArr } from "./utils.js";

import {
  bogoSort,
  bubbleSort,
  shakerSort,
  combSort,
  insertionSort,
  selectionSort,
  quickSort,
  mergeSort,
} from "../algorithms/index.js";
const colorArr = ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"];
const mainScreen = document.getElementById("main-screen");
const mixButton = document.getElementById("mix-button");
const sortButton = document.getElementById("sort-button");
const iterationWindow = document.getElementById("iteration-window");
const closeButton = document.getElementById("close-button");
const infoButton = document.getElementById("info-button");
const actualCard = document.querySelector(".card__container");
const mainList = document.querySelector(".main__list");
const infoScreen = document.getElementById("info-screen");
const popupe = document.querySelector(".card__popup");
const infoButtonTemplate = document.getElementById("info-button-template");
const referenceArray = getReferenceArr();
let screen = mainScreen.getContext("2d");
mainScreen.width = 970;
mainScreen.height = 301;
const PAUSE_DURATION = 550;

const initialCards = [
  { id: 1, title: "пузырек", method: bubbleSort, weight: 1, pauseDuration: 5 },
  { id: 2, title: "шейкер", method: shakerSort, weight: 2, pauseDuration: 5 },
  { id: 3, title: "расческа", method: combSort, weight: 1, pauseDuration: 5 },
  { id: 4, title: "вставка", method: insertionSort, weight: 1, pauseDuration: 50 },
  { id: 5, title: "выбор", method: selectionSort, weight: 1, pauseDuration: 20 },
  { id: 6, title: "быстрая", method: quickSort, weight: 1, pauseDuration: 500 },
  { id: 7, title: "слияние", method: mergeSort, weight: 1, pauseDuration: 700 },
  { id: 8, title: "пирамидальная", method: bubbleSort, weight: 1, pauseDuration: 20 },
  { id: 9, title: "богосорт", method: bogoSort, weight: 1, pauseDuration: 20 },
];

export {
  colorArr,
  mainScreen,
  mixButton,
  sortButton,
  closeButton,
  infoButton,
  infoButtonTemplate,
  iterationWindow,
  actualCard,
  mainList,
  referenceArray,
  screen,
  infoScreen,
  initialCards,
  popupe,
  PAUSE_DURATION,
};
