class MainCard {
  constructor(method, arr) {
    this._method = method;
    this._arr = arr;
  }

  calculate(item) {
    this._arr = this._method(item);
    return this._arr;
  }
}

export { MainCard };
