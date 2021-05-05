import { Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AddCircleOutlineSharpIcon from "@material-ui/icons/AddCircleOutlineSharp";
import { useRootStore } from "../../root-store/RootStateContext";

const ContainerHeader = withStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
})(Container);

const Header = ({}) => {
  const { popupFormAddUser } = useRootStore();

  const openPopup = () => {
    popupFormAddUser.toggleCondition(true);
  };

  return (
    <header>
      <ContainerHeader>
        <h1>Add new User</h1>
        <AddCircleOutlineSharpIcon onClick={openPopup} />
      </ContainerHeader>
    </header>
  );
};

export default Header;
