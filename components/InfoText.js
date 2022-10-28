class Info {
    constructor(options) {
      this._title = options.title;
      this._id = options.id;
    }
  
    _getTemplate() {
      const linkElement = document
        .getElementById("button-card-template")
        .content.querySelector(".main__card")
        .cloneNode(true);
      return linkElement;
    }
  
    generateCard() {
      this._element = this._getTemplate();
      this._element.setAttribute("id", `card-link${this._id}`);
      this._element.textContent = this._title;
      return this._element;
    }
  }
  
  export { Info };

  