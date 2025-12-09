import BoardPresenter from './presenter/board-presenter';
// import PointModel from './model/point-model';
// import { humanizeTaskDueDate, getTimePeriod, DATE_FORMAT } from './utils';

const filtersContainer = document.querySelector('.trip-controls__filters');
const eventsContainer = document.querySelector('.trip-events');
// const pointMod = new PointModel();

const boardPresenter = new BoardPresenter({ tripControls: filtersContainer, tripEvents: eventsContainer });
boardPresenter.init();

// pointModel.init();
// console.log(pointModel.getDestinations());
// console.log(getTimePeriod('2020-06-11T21:59:56.845Z', '2021-07-11T21:59:56.845Z'));
