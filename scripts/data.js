import { getReferenceArr } from "./utils.js";
const colorArr = ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"];
const mainScreen = document.getElementById("main-screen");
const mixButton = document.getElementById("mix-button");
const sortButton = document.getElementById("sort-button");
const iterationWindow = document.getElementById("iteration-window");
const closeButton = document.getElementById("close-button");
const actualCard = document.querySelector(".card__container");
const referenceArray = getReferenceArr();
let screen = mainScreen.getContext("2d");
mainScreen.width = 970;
mainScreen.height = 301;
const PAUSE_DURATION = 150;
const initialCards = [
  "пузырек",
  "шейкер",
  "расческа",
  "вставка",
  "выбор",
  "быстрая",
  "слияние",
  "пирамидальная",
  "богосорт",
];

export {
  colorArr,
  mainScreen,
  mixButton,
  sortButton,
  closeButton,
  iterationWindow,
  actualCard,
  referenceArray,
  screen,
  initialCards,
  PAUSE_DURATION,
};
