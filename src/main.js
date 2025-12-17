import BoardPresenter from './presenter/board-presenter';
import FilterView from './view/filter-view.js';
import { render } from './render.js';

const filtersContainer = document.querySelector('.trip-controls__filters');
const eventsContainer = document.querySelector('.trip-events');
const boardPresenter = new BoardPresenter(eventsContainer);

render(new FilterView(), filtersContainer);


boardPresenter.init();

