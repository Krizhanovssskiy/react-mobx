import { makeAutoObservable } from "mobx";

export class PopupStore {
  constructor() {
    makeAutoObservable(this);
  }
  condition = false;

  toggleCondition = (toggle) => {
    this.condition = toggle;
  };
}

// export default new NotesStore();
