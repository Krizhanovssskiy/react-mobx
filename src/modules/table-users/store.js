import { makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";
import { createUser } from "../../helpers/functions";

export class TableUsersStore {
  constructor() {
    makeAutoObservable(this);
  }
  users = [
    createUser({ id: uuidv4(), timer: 0, name: "bbb", status: false }),
    createUser({ id: uuidv4(), timer: 0, name: "bbb", status: false }),
    createUser({ id: uuidv4(), timer: 0, name: "bbb", status: false }),
  ];

  addNewUser = (name) => {
    this.users.push(
      createUser({
        id: uuidv4(),
        timer: 0,
        name,
        status: false,
      })
    );
  };

  deleteUser = (id) => {
    this.users = this.users.filter((item) => item.id !== id);
  };

  changeStatus = ({ id, timer }) => {
    const indexUser = this.users.find((item) => item.id === id);
    indexUser.timer = timer;
    indexUser.status = !indexUser.status;
  };

  increaseTimer = (id) => {
    const indexUser = this.users.find((item) => item.id === id);
    indexUser.timer += 1;
  };
}

// export default new NotesStore();
