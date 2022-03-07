import React from "react"; //useContext key used to get the datas from the props from the context by only this (useContetxt-keyword) to this children (student)
import { Link, NavLink } from "react-router-dom"; //link needed for page navigation
import Table from "@mui/material/Table"; // install material ui npm install @mui/material @emotion/react @emotion/styled
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent } from "../Redux/Action/StudentAction";

function Student() {
  const state = useSelector((state) => state.studentReducer);
  const dispatch = useDispatch();
  console.log(state);
  const deleteStu = (id) => {
    dispatch(deleteStudent(id));
  };
  return (
    <div>
      <p className="Heading">
        <h1>Student Details </h1>
        <Link to="/studentdesc" className="addbtn">
          Add New Student
        </Link>
      </p>
      <TableContainer
        sx={{
          width: "90%",
          margin: "0 5% 0 5%",
        }}
        component={Paper}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Course</TableCell>
              <TableCell align="right">Batch</TableCell>
              <TableCell align="right">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.map((stu) => (
              <TableRow
                // key={stu.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {stu.name}
                </TableCell>
                <TableCell align="right">{stu.age}</TableCell>
                <TableCell align="right">{stu.course}</TableCell>
                <TableCell align="right">{stu.batch}</TableCell>
                <TableCell align="right">
                  <NavLink
                    to={`/studentdesc/${stu.id}`}
                    className="fas fa-edit mr-2"
                  />
                  <i
                    onClick={() => {
                      deleteStu(stu.id);
                    }}
                    className="fas fa-trash-alt"
                  ></i>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default Student;

// npm install @mui/material @emotion/react @emotion/styled mui install cmd
