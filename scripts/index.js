const mainScreen = document.getElementById("main-screen");
const mixButton = document.getElementById("mix-button");
const sortButton = document.getElementById("sort-button");

context = mainScreen.getContext("2d");

mainScreen.width = 970;
mainScreen.height = 301;

let referenceArray = [];

for (let i = 1; i <= 100; i++) {
  referenceArray.push(i);
}

let mainArr = [];

const getMainArr = () => {
  let currentReferenceArr = referenceArray.slice();
  for (let i = 1; i <= 100; i++) {
    let arrLength = currentReferenceArr.length;
    let position = Math.floor(Math.random() * arrLength);
    let newItem = currentReferenceArr.splice(position, 1)[0];
    mainArr.push(newItem);
  }

  return mainArr;
};

const renderRow = () => {
  let colorArr = ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"];
  

  getMainArr();

  context.clearRect(0, 0, mainScreen.width, mainScreen.height);

  for (let i = 0; i <= mainArr.length - 1; i++) {

    let color = colorArr[Math.floor(mainArr[i] / 20)];

    context.fillStyle = color;
    context.fillRect(i * 9 + 40, 10, 3, mainArr[i] * 2);
  }
  mainArr.splice(0, 100);
};



mixButton.addEventListener("click", () => renderRow());
