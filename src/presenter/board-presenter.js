import SortView from '../view/sort-view.js';
import PointListView from '../view/point-list-view.js';
import { render } from '../framework/render.js';
import PointPresenter from './point-presenter.js';
// import { RenderPosition, remove } from '../framework/render.js';
import ListEmptyView from '../view/list-empty-view.js';
// import { getDefaultPoint } from '../utils/utils.js';
import { updatePoint } from '../utils/utils.js';

export default class BoardPresenter {

  #pointListView = new PointListView();
  #tripEvents = null;
  #points = null;
  #offers = null;
  #destinations = null;
  #pointPresenter = new Map();

  constructor(tripEvents, pointModel) {
    this.#tripEvents = tripEvents;
    this.#points = pointModel.points || [];
    this.#destinations = pointModel.destinations || [];
    this.#offers = pointModel.offers;
  }

  init() {


    if (this.#points.length) {
      render(new SortView(), this.#tripEvents);
      render(this.#pointListView, this.#tripEvents);
      for (const point of this.#points) {
        const pointPresenter = new PointPresenter({
          pointsContainer: this.#pointListView,
          destinations: this.#destinations,
          offers: this.#offers,
          onClickFavoriteButton: this.#handlePointChange,
          onFormOpen: this.#handleFormOpen,
        });
        this.#pointPresenter.set(point.id, pointPresenter);
        pointPresenter.init(point);
      }
    } else {
      render(new ListEmptyView(), this.#tripEvents);
    }
  }

  #handlePointChange = (updatedPoint) => {
    this.#points = updatePoint(this.#points, updatedPoint);
    this.#pointPresenter.get(updatedPoint.id).init(updatedPoint);
  };

  #handleFormOpen = () => {
    this.#pointPresenter.forEach((pointPresenter) => pointPresenter.reset());
  };


  // #renderPoints(points, destinations, offers) {
  //   for (const point of points) {
  //     this.#renderPoint(point, destinations, offers);
  //   }
  // }

  // #renderPoint(point, destinations, offers) {
  //   const pointPresenter = new PointPresenter(this.#pointListView);
  //   pointPresenter.init(point, destinations, offers);
  // }
}
