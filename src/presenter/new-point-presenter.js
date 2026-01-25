import EditPointView from '../view/edit-point-view';
import { render, RenderPosition, remove, replace } from '../framework/render';
import { UserAction, UpdateType } from '../consts';
import { getDefaultPoint } from '../utils/utils';

export default class NewPointPresenter {
  #pointComponent = null;
  #editPointComponent = null;
  #pointsContainer = null;
  #destinations = null;
  #offers = null;
  #handleDataChange = null;
  #onClickFormOpen = null;
  #isOpenEdit = false;
  #newId = null;
  constructor({ pointsContainer, onDataChange, onFormOpen, destinations, offers, newId }) {
    this.#pointsContainer = pointsContainer;
    this.#handleDataChange = onDataChange;
    this.#onClickFormOpen = onFormOpen;
    this.#destinations = destinations;
    this.#offers = offers;
    this.#newId = newId;
  }

  init() {

    this.#editPointComponent = new EditPointView({
      point: getDefaultPoint(),
      destinations: this.#destinations,
      offers: this.#offers,
      onFormSubmit: this.#formSubmitHandler,
      onDeleteBtnClick: this.#onDeleteBtnClick,
    });

    render(this.#editPointComponent, this.#pointsContainer.element, RenderPosition.AFTERBEGIN);
    document.addEventListener('keydown', this.#onEscKeydown);

  }

  destroy() {
    remove(this.#editPointComponent);
  }

  reset() {
    if (this.#isOpenEdit) {
      this.#editPointComponent.resetPoint();
    }
  }

  #formSubmitHandler = (point) => {
    this.#handleDataChange(
      UserAction.ADD_POINT,
      UpdateType.MAJOR,
      { ...point, id: this.#newId });
    this.#onClickFormOpen();
    // replace(this.#pointComponent, this.#editPointComponent);
    document.removeEventListener('keydown', this.#onEscKeydown);
    this.#isOpenEdit = false;
  };

  #onDeleteBtnClick = () => {
    remove(this.#editPointComponent);
    document.removeEventListener('keydown', this.#onEscKeydown);
  };

  #onEscKeydown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      remove(this.#editPointComponent);
      this.#isOpenEdit = false;
      document.removeEventListener('keydown', this.#onEscKeydown);
    }
  };
}
