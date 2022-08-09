import { getReferenceArr } from "./utils.js";
const colorArr = ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"];
const mainScreen = document.getElementById("main-screen");
const mixButton = document.getElementById("mix-button");
const sortButton = document.getElementById("sort-button");
const referenceArray = getReferenceArr();
let screen = mainScreen.getContext("2d");
mainScreen.width = 970;
mainScreen.height = 301;

export { colorArr, mainScreen, mixButton, sortButton, referenceArray, screen };
