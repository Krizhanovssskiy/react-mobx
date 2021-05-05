import { makeAutoObservable } from "mobx";

export class NotesStore {
  constructor() {
    makeAutoObservable(this);
  }
  counter = 0;

  incremented = () => {
    this.counter++;
  };

  decremented = () => {
    this.counter--;
  };
}

// export default new NotesStore();
