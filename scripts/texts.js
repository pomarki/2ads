const bubbleText = `#Пузырьковая сортировка\n
Самый известный и самый простой алгоритм сортировки.\n
Последовательно сравниваются значения соседних элементов. В случае, если предыдущий оказывается больше последующего (при сортировке по возрастанию), то элементы меняются местами.\n
В результате, элемент всплывает, словно пузырёк, или тонет как топор (при сортировке по убыванию). Но этот алгоритм не назвали @y“Сортировка топором”@, потому что слово @y“топор”@ звучит мрачно, не то что лёгкое и весёлое слово “пузырёк”.\n
Алгоритм считается учебным и в здравом уме на практике не применяется.\n
$СЛОЖНОСТЬ ПО ВРЕМЕНИ\n
@rХудшее время:@ O(n2)\n
@yСреднее время:@ O(n2)\n
@gЛучшее время:@ O(n)\n
@wЗатраты памяти:@ O(1)\n
`;

export { bubbleText };

// #TITLE
// $SUBTITLE
// \nPARAGRAPH
// @r
// @y
// @g
// @w
//

const openT = `<h2 class="card__info-title">`;
const closeT = `</h2>`;
const openP = `<p class="card__info-text">`;
const closeP = `</p>`;
const openQY = `<span class="card__info-yellow">`;
const openQR = `<span class="card__info-red">`;
const openQG = `<span class="card__info-green">`;
const openQW = `<span class="card__info-white">`;
const closeQ = `</span>`;
const openST = `<h3 class="card__info-subtitle">`;
const closeST = `</h3>`;

const parsedText = (str) => {
  let textArr = str.split("\n").filter((i) => i !== "" && i !== " ");
  let result = textArr.map((item) => {
    let subRes = "";
    if (item.includes("@")) {
      let subStr = item.split("@");
      let subItem = "";
      let res = subStr.map((i) => {
        switch (i[0]) {
          case "r":
            subItem = openQR + i.slice(1, i.length) + closeQ;
            break;
          case "y":
            subItem = openQY + i.slice(1, i.length) + closeQ;
            break;
          case "g":
            subItem = openQG + i.slice(1, i.length) + closeQ;
            break;
          case "w":
            subItem = openQW + i.slice(1, i.length) + closeQ;
            break;
          default:
            subItem = i;
        }
        return subItem;
      });
      return openP + res.join("") + closeP;
    } else {
      switch (item[0]) {
        case "#":
          subRes = openT + item.slice(1, item.length) + closeT;
          break;
        case "$":
          subRes = openST + item.slice(1, item.length) + closeST;
          break;
        default:
          subRes = openP + item + closeP;
      }
    }
    return subRes;
  });
  return result;
};

let a = [
  "<h2 class='card__info-title'>Пузырьковая сортировка</h2>",
  "<p class='card__info-text'>Самый известный и самый простой алгоритм сортировки.</p>",
  "<p class='card__info-text'>Последовательно сравниваются значения соседних элементов. В случае, если предыдущий оказывается больше последующего (при сортировке по возрастанию), то элементы меняются местами.</p>",
  "<p class='card__info-text'>В результате, элемент всплывает, словно пузырёк, или тонет как топор (при сортировке по убыванию). Но этот алгоритм не назвали <span class='card__info-yellow'>“Сортировка топором”</span>, потому что слово <span class='card__info-yellow'>“топор”</span> звучит мрачно, не то что лёгкое и весёлое слово “пузырёк”.</p>",
  "<p class='card__info-text'>Алгоритм считается учебным и в здравом уме на практике не применяется.</p>",
  "<h3 class='card__info-subtitle'>СЛОЖНОСТЬ ПО ВРЕМЕНИ</h3>",
  "<p class='card__info-text'><span class='card__info-red'>Худшее время:</span> O(n2)</p>",
  "<p class='card__info-text'><span class='card__info-yellow'>Среднее время:</span> O(n2)</p>",
  "<p class='card__info-text'><span class='card__info-green'>Лучшее время:</span> O(n)</p>",
  "<p class='card__info-text'><span class='card__info-white'>Затраты памяти:</span> O(1)</p>",
];
