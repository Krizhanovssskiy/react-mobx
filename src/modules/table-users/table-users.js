import React, { useState, useEffect } from "react";
import { useObserver } from "mobx-react-lite";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Switch,
  Button,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Container,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useRootStore } from "../../root-store/RootStateContext";

const useStyles = makeStyles({
  table: {
    minWidth: 375,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const TableRowItem = ({ row, deleteUser, changeStatus }) => {
  const classes = useStyles();
  const [time, setTime] = useState(row.timer);
  const [timerId, setTimerId] = useState(null);
  const onChangeStatus = () => {
    changeStatus({ id: row.id, timer: time });
  };
  const onDeleteUser = () => {
    deleteUser(row.id);
    clearInterval(timerId);
  };

  useEffect(() => {
    if (row.status) {
      startTimer();
    } else {
      clearInterval(timerId);
    }
    return () => {
      clearInterval(timerId);
    };
  }, [row.status]);

  const startTimer = () => {
    const id = setInterval(() => {
      setTime((state) => state + 1);
    }, [1000]);

    setTimerId(id);
  };

  return useObserver(() => (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        {time}
      </StyledTableCell>
      <StyledTableCell align="right">{row.name}</StyledTableCell>
      <StyledTableCell align="right">
        {row.status ? "Active" : "Inactive"}
      </StyledTableCell>
      <StyledTableCell align="right">
        <Switch
          checked={row.status}
          onChange={onChangeStatus}
          color="primary"
          name="checkedB"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </StyledTableCell>
      <StyledTableCell align="right">
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
          onClick={onDeleteUser}
        >
          Delete
        </Button>
      </StyledTableCell>
    </StyledTableRow>
  ));
};

const TableUsers = (props) => {
  const classes = useStyles();
  const { usersData } = useRootStore();

  return useObserver(() => (
    <section>
      <Container>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Elapsed time</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Change Status</StyledTableCell>
                <StyledTableCell align="right">Delete Button</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usersData.users.map((row) => (
                <TableRowItem
                  key={row.id}
                  row={row}
                  deleteUser={usersData.deleteUser}
                  changeStatus={usersData.changeStatus}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </section>
  ));
};

export default TableUsers;
