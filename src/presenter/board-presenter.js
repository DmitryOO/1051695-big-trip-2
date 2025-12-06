import SortView from '../view/sort-view.js';
import FilterView from '../view/filter-view.js';
import PointView from '../view/point-view.js';
import PointListView from '../view/point-list-view.js';
import EventEditView from '../view/event-edit-view.js';
import { render } from '../render.js';
import PointModel from '../model/point-model.js';

export default class BoardPresenter {

  constructor({ tripControls, tripEvents }) {
    this.tripControls = tripControls;
    this.tripEvents = tripEvents;
    this.pointModel = new PointModel();
    this.pointListView = new PointListView();
  }

  init() {
    this.pointModel.init();
    const points = this.pointModel.getPoints();
    const destinations = this.pointModel.getDestinations();
    const offers = this.pointModel.getOffers();
    console.log(this.pointModel.getPoints());
    render(new FilterView(), this.tripControls);
    render(new SortView(), this.tripEvents);
    render(this.pointListView, this.tripEvents);
    render(new EventEditView(), this.pointListView.getElement());
    console.log(points[0].basePrice);
    for (let i = 0; i < 3; i++) {
      render(new PointView(points[0], destinations, offers), this.pointListView.getElement());
    }
  }
}
