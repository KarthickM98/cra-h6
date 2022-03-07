import { createStore } from "redux";
import rootreducer from "./Redux/Reducers/Rootreducer";

const store = createStore(rootreducer);
export default store;
