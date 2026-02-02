import AbstractView from '../framework/view/abstract-view.js';
import { EmptyMessage } from '../consts.js';

function createListEmptyTemplate(message) {
  return `<p class="trip-events__msg">${message}</p>`;
}

export default class ListEmptyView extends AbstractView {
  #isLoading = false;
  #message = null;
  constructor(filterType, isLoading = false) {
    super();
    this.#message = EmptyMessage[filterType];
    this.#isLoading = isLoading;
  }

  get template() {
    if (this.#isLoading) {
      return createListEmptyTemplate(EmptyMessage.IS_LOADING);
    }
    return createListEmptyTemplate(this.#message);
  }
}
