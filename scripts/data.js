import { getReferenceArr } from "./utils.js";
import { bubbleSort } from "./bubble.js";
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
  {id: 1, title: "пузырек", method: bubbleSort},
  {id: 2, title: "шейкер", method: bubbleSort},
  {id: 3, title: "расческа", method: bubbleSort},
  {id: 4, title: "вставка", method: bubbleSort},
  {id: 5, title: "выбор", method: bubbleSort},
  {id: 6, title: "быстрая", method: bubbleSort},
  {id: 7, title: "слияние", method: bubbleSort},
  {id: 8, title: "пирамидальная", method: bubbleSort},
  {id: 9, title: "богосорт", method: bubbleSort},
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
