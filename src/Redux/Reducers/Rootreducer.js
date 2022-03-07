import { combineReducers } from "redux";
import studentReducer from "./StudentReducer";

const rootreducer = combineReducers({
  studentReducer,
});
export default rootreducer;
