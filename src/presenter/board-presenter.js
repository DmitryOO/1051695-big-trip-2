import SortView from '../view/sort-view.js';
import PointView from '../view/point-view.js';
import PointListView from '../view/point-list-view.js';
import EditPointView from '../view/edit-point-view.js';
import { render, RenderPosition } from '../render.js';
import PointModel from '../model/point-model.js';
import { getDefaultPoint } from '../utils.js';


export default class BoardPresenter {

  constructor(tripEvents) {
    this.tripEvents = tripEvents;
    this.pointModel = new PointModel();
    this.pointListView = new PointListView();
  }

  init() {
    this.pointModel.init();
    const points = this.pointModel.getPoints();
    const destinations = this.pointModel.getDestinations() || [];
    const offers = this.pointModel.getOffers();


    render(new SortView(), this.tripEvents);
    render(this.pointListView, this.tripEvents);
    render(new EditPointView(getDefaultPoint(), destinations, offers), this.pointListView.getElement(), RenderPosition.AFTERBEGIN);
    render(new EditPointView(points[3], destinations, offers), this.pointListView.getElement());

    for (const point of points) {
      render(new PointView(point, destinations, offers), this.pointListView.getElement());
    }
  }
}
