import { bubbleSort } from "../scripts/bubble.js";



class MainCard {
  constructor(options) {
    this._id = options.id;
    this._title = options.title;
    this._sortAlgorithm = options.sortAlgorithm;
  }
  _getTemplate() {
    const mainElement = document
      .getElementById("main-card-template")
      .content.querySelector(".card__button-bar")
      .cloneNode(true);
    return mainElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    return this._element;
  }
}

export { MainCard };
