const mainScreen = document.getElementById("main-screen");
const mixButton = document.getElementById("mix-button");
const sortButton = document.getElementById("sort-button");

ctx = mainScreen.getContext("2d");

mainScreen.width = 970;
mainScreen.height = 301;

let referenceArray = [];
let mainArr = [];

const getMainArr = () => {
  for (let i = 1; i <= 100; i++) {
    referenceArray.push(i);
  }

  for (let i = 1; i <= 100; i++) {
    let arrLength = referenceArray.length;
    let position = Math.floor(Math.random() * arrLength);
    let newItem = referenceArray.splice(position, 1)[0];
    mainArr.push(newItem);
  }

  return mainArr;
};

const renderRow = () => {
  getMainArr();
  for (let i = 0; i <= mainArr.length - 1; i++) {
    ctx.fillStyle = "white";
    ctx.fillRect(i * 10, 10, 3, mainArr[i] * 3);
  }
};

mixButton.addEventListener("click", () => renderRow());
