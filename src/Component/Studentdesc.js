import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, updateStudent } from "../Redux/Action/StudentAction";

export const Studentdesc = () => {
  const navigate = useNavigate();
  const student = useSelector((state) => state.studentReducer);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [data, setData] = useState({
    id: "",
    name: "",
    age: "",
    course: "",
    batch: "",
  });
  useEffect(() => {
    //compunentWillUnmount compunentWillmount equivlent function
    loadUserData(); //eslint-disable-next-line
  }, []);
  const loadUserData = async () => {
    // since useeffect will be done after the end phase we use async await function
    const any = await student.filter((x) => x.id === id);
    any.map((x) => setData(x));
  };
  const handle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const submit = (e) => {
    e.preventDefault();
    if (!id === "") {
      const newdata = { ...data, id: id };
      dispatch(updateStudent(newdata));
    } else {
      //new data condition
      const newdata = {
        ...data,
        id: `${Math.floor(Math.random() * 90 + 10)}`,
      };
      dispatch(addStudent(newdata));
    }
    navigate("/student");
  };
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "50ch", margin: "50px" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            name="name"
            id="outlined-required"
            label="Name"
            value={data.name}
            onChange={handle}
          />
          <TextField
            required
            name="age"
            id="outlined-number"
            label="Age"
            value={data.age}
            onChange={handle}
          />
        </div>
        <div>
          <TextField
            required
            name="course"
            id="outlined-required"
            label="Course"
            value={data.course}
            onChange={handle}
          />
          <TextField
            required
            name="batch"
            id="outlined-required"
            label="Batch"
            value={data.batch}
            onChange={handle}
          />
        </div>
        <Button
          style={{
            color: "black",
            borderColor: "black",
            marginLeft: "63%",
          }}
          variant="outlined"
        >
          <Link to="../student">Cancel</Link>
        </Button>{" "}
        &nbsp;{" "}
        <Button onClick={submit} variant="contained">
          Update!
        </Button>
      </Box>
    </div>
  );
};
