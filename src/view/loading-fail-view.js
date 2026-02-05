import AbstractView from '../framework/view/abstract-view.js';

function createLoadingFailTemplate() {
  return '<p class="trip-events__msg">Failed to load latest route information</p>';
}

export default class LoadingFailView extends AbstractView {
  get template() {
    return createLoadingFailTemplate();
  }
}
