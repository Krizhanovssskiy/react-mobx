import { useObserver } from "mobx-react-lite";
import { useRootStore } from "./root-store/RootStateContext";
import Header from "./components/header";
import ModalComponent from "./components/modal-component";
import AddUserForm from "./modules/add-user-form";
import TableUsers from "./modules/table-users";

const App = () => {
  const { notesStore, popupFormAddUser } = useRootStore();

  return useObserver(() => (
    <div className="App">
      <Header />
      <TableUsers />

      <ModalComponent
        openPopup={popupFormAddUser.condition}
        togglePopup={popupFormAddUser.toggleCondition}
      >
        <AddUserForm />
      </ModalComponent>
    </div>
  ));
};

export default App;
