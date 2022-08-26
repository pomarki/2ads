import { getReferenceArr } from "./utils.js";
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
  {id: 1, title: "пузырек"},
  {id: 2, title: "шейкер"},
  {id: 3, title: "расческа"},
  {id: 4, title: "вставка"},
  {id: 5, title: "выбор"},
  {id: 6, title: "быстрая"},
  {id: 7, title: "слияние"},
  {id: 8, title: "пирамидальная"},
  {id: 9, title: "богосорт"},
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
