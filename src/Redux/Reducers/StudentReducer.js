const initialState = [
  {
    id: "1",
    name: "john",
    age: "24",
    course: "MERN",
    batch: "oct",
  },
  {
    id: "2",
    name: "joe",
    age: "25",
    course: "MERN",
    batch: "oct",
  },
  {
    id: "3",
    name: "biden",
    age: "36",
    course: "MERN",
    batch: "sep",
  },
  {
    id: "4",
    name: "obama",
    age: "29",
    course: "MERN",
    batch: "nov",
  },
  {
    id: "5",
    name: "ellen",
    age: "27",
    course: "MERN",
    batch: "aug",
  },
];

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return [...state, action.payload];
    case "UPDATE_STUDENT":
      const newStu = state.map((val) =>
        val.id == action.payload.id ? action.payload : val
      );
      return newStu;
    case "DELETE_STUDENT":
      const delStu = state.filter((val) => val.id !== action.payload);
      return delStu;
    default:
      return state;
  }
};
export default studentReducer;
