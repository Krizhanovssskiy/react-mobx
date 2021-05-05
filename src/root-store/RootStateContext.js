import React from "react";
import { NotesStore } from "../store/NoteStore";
import { PopupStore } from "../modules/add-user-form/store";
import { TableUsersStore } from "../modules/table-users/store";

const RootStateContext = React.createContext();

const notesStore = new NotesStore();
const popupFormAddUser = new PopupStore();
const usersData = new TableUsersStore();

const storeValue = {
  notesStore,
  popupFormAddUser,
  usersData,
};

export const RootStateProvider = ({ children }) => {
  return (
    <RootStateContext.Provider value={storeValue}>
      {children}
    </RootStateContext.Provider>
  );
};

export const useRootStore = () => React.useContext(RootStateContext);
