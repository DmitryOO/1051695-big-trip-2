// import SortView from './view/sort-view.js';
// import FilterView from './view/filter-view.js';
// import PointView from './view/point-view.js';
// import PointListView from './view/point-list-view.js';
// import EventEditView from './view/event-edit-view.js';
// import { render } from './render.js';

// export default class BoardPresenter {
//   boardComponent = new PointView();
//   taskListComponent = new PointListView();

//   constructor({boardContainer}) {
//     this.boardContainer = boardContainer;
//   }

//   init() {
//     render(this.boardComponent, this.boardContainer);
//     render(new SortView(), this.boardComponent.getElement());
//     render(this.taskListComponent, this.boardComponent.getElement());
//     render(new TaskEditView(), this.taskListComponent.getElement());

//     for (let i = 0; i < 3; i++) {
//       render(new TaskView(), this.taskListComponent.getElement());
//     }

//     render(new LoadMoreButtonView(), this.boardComponent.getElement());
//   }
// }

