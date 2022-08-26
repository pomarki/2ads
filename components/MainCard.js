import { bubbleSort } from "../scripts/bubble.js";

const initialCards = [{ id: 1, title: "пузырек", sortAlgorithm: bubbleSort() }];

class MainCard {
  constructor(options) {
    this._id = options.id;
    this._title = options.title;
    this._sortAlgorithm = options.sortAlgorithm;
  }

  

}
