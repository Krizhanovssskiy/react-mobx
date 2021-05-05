import * as React from "react";

import { withStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useRootStore } from "../../root-store/RootStateContext";

import styles from "./add-user-form.module.scss";

const ValidationTextField = withStyles({
  root: {
    margin: "0 auto 10px",
    "& input:valid + fieldset": {
      borderColor: "green",
      borderWidth: 2,
    },
    // '& input:invalid + fieldset': {
    //   borderColor: 'red',
    //   borderWidth: 2,
    // },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      padding: "4px !important", // override inline-style
    },
  },
})(TextField);

const AddUserForm = ({}) => {
  const [valueField, setValueField] = React.useState("");
  const { usersData, popupFormAddUser } = useRootStore();

  const onHandleChange = (e) => {
    setValueField(e.target.value);
  };

  const onSubmite = (e) => {
    if (!(valueField.trim().length > 2 && valueField.trim().length < 20)) {
      return;
    }
    e.preventDefault();
    usersData.addNewUser(valueField);
    setValueField("");
    popupFormAddUser.toggleCondition(false);
  };

  return (
    <form
      className={styles.form}
      noValidate
      autoComplete="off"
      onSubmit={onSubmite}
    >
      <ValidationTextField
        value={valueField}
        name="nameUser"
        onChange={onHandleChange}
        label="Name"
        required
        variant="outlined"
        id="validation-outlined-input"
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={styles.button}
        startIcon={<SaveIcon />}
        onClick={onSubmite}
      >
        Save
      </Button>
    </form>
  );
};

export default AddUserForm;
