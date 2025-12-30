
import AbstractView from '../framework/view/abstract-view.js';

const EmptyMessage = {
  EVERYTHING: 'Click New Event to create your first point',
  FUTURE: 'There are no future events now',
  PRESENT: 'There are no present events now',
  PAST: 'There are no past events now',
};

function createListEmptyTemplate(message = EmptyMessage.EVERYTHING) {
  return `<p class="trip-events__msg">${message}</p>`;
}


export default class ListEmptyView extends AbstractView {
  get template() {
    return createListEmptyTemplate();
  }
}
