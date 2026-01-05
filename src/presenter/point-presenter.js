import PointView from '../view/point-view';
import EditPointView from '../view/edit-point-view';
import { render, replace, remove } from '../framework/render';

export default class PointPresenter {
  #pointComponent = null;
  #editPointComponent = null;
  #pointsContainer = null;
  #point = null;
  #destinations = null;
  #offers = null;

  constructor(pointsContainer) {
    this.#pointsContainer = pointsContainer;
  }

  init(point, destinations, offers) {
    this.#point = point;
    this.#destinations = destinations;
    this.#offers = offers;

    const prevPointComponent = this.#pointComponent;
    const prevEditPointComponent = this.#editPointComponent;


    this.#pointComponent = new PointView(this.#point, this.#destinations, this.#offers, this.#onRollupBtnPointClick);
    this.#editPointComponent = new EditPointView(this.#point, this.#destinations, this.#offers, this.#onRollupBtnFormClick, this.#onSaveBtnClick);

    if (prevPointComponent === null || prevEditPointComponent === null) {
      render(this.#pointComponent, this.#pointsContainer.element);
      return;
    }

    if (this.#pointsContainer.contains(prevPointComponent.element)) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#pointsContainer.contains(prevEditPointComponent.element)) {
      replace(this.#editPointComponent, prevEditPointComponent);
    }

    remove(prevPointComponent);
    remove(prevEditPointComponent);
  }


  destroy() {
    remove(this.#pointComponent);
    remove(this.#editPointComponent);
  }

  #onEscKeydown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      replace(this.#pointComponent, this.#editPointComponent);
      document.removeEventListener('keydown', this.#onEscKeydown);
    }
  };

  #onRollupBtnFormClick = () => {
    replace(this.#pointComponent, this.#editPointComponent);
    document.removeEventListener('keydown', this.#onEscKeydown);
  };

  #onRollupBtnPointClick = () => {
    replace(this.#editPointComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#onEscKeydown);
  };

  #onSaveBtnClick = () => {
    replace(this.#pointComponent, this.#editPointComponent);
    document.removeEventListener('keydown', this.#onEscKeydown);
  };
}
