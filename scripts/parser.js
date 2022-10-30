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

export { parsedText };
