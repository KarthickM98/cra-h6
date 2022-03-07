export const addStudent = (data) => {
  return {
    type: "ADD_STUDENT",
    payload: data,
  };
};
export const updateStudent = (data) => {
  return {
    type: "UPDATE_STUDENT",
    payload: data,
  };
};
export const deleteStudent = (id) => {
  return {
    type: "DELETE_STUDENT",
    payload: id,
  };
};
