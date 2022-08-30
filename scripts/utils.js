

const getReferenceArr = () => {
  let result = [];
  for (let i = 1; i <= 100; i++) {
    result.push(i);
  }
  return result;
};

const getMainArr = (arr) => {
  let currentReferenceArr = arr.slice();
  let result = [];
  for (let i = 1; i <= 100; i++) {
    let arrLength = currentReferenceArr.length;
    let position = Math.floor(Math.random() * arrLength);
    let newItem = currentReferenceArr.splice(position, 1)[0];
    result.push(newItem);
  }

  return result;
};

const checkRow = (arr) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};

const disableButton = (buttonId) => {
  buttonId.classList.add("card__button_type_inactive");
  buttonId.disabled = true;
};

const enableButton = (buttonId) => {
  buttonId.classList.remove("card__button_type_inactive");
  buttonId.disabled = false;
};

const closeCard = (card) => {
  card.classList.add("card_type_inactive");
};


const openCard = (card) => {
  card.classList.remove("card_type_inactive");
}

const getId = (str) => {
  let id = Number(str[str.length - 1]);
  isNaN(id) ? (id = 0) : id;
  return id;
};

const getMethodById = (arr, id, value) => {
  const result = arr.filter((item) => {
    return item.id === id;
  });
  return result[0][value];
};

export {
  getReferenceArr,
  getMainArr,
  checkRow,
  disableButton,
  enableButton,
  closeCard,
  openCard,
  getId,
  getMethodById,
};
