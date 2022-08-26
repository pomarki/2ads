class ButtonCard {
  constructor(options) {
    this._title = options.title;
    this._id = options.id;
    /* this._selector = options.selector; */
  }

  _getTemplate() {
    const template = document.querySelector("#button-card-template");
    const buttonElement = template.content.cloneNode(true);
    return buttonElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".main__card").textContent = this._title;
    this._setEventListeners();
    console.log(this._element);
    return this._element;
  }

  _setEventListeners() {
    this._element.addEventListener("click", () => console.log(this._title));
  }
}

export { ButtonCard };
