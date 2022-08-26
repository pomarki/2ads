class ButtonCard {
  constructor(options) {
    this._title = options.title;
    this._id = options.id;
    /* this._selector = options.selector; */
  }

  _getTemplate() {
    const buttonElement = document
      .getElementById("main-card-template")
      .content.querySelector(".main__card")
      .cloneNode(true);
    return buttonElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.textContent = this._title;
    this._setEventListeners();
    console.log(this._element);
    return this._element;
  }

  _setEventListeners() {
    this._element.addEventListener("click", () => console.log(this._title));
  }
}

export { ButtonCard };
