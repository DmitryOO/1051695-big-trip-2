import SortView from './view/sort-view.js';
import FilterView from './view/filter-view.js';
import PointView from './view/point-view.js';
import PointListView from './view/point-list-view.js';
import EventEditView from './view/event-edit-view.js';
import { render } from './render.js';

const tripControls = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
// const pointListView = render(new PointListView, tripEvents);
render(new FilterView, tripControls);
render(new SortView, tripEvents);
render(new PointListView, tripEvents);
render(new EventEditView, tripEvents);
for (let i = 0; i < 3; i++) {
  render(new PointView, tripEvents);
}
