import { combineReducers } from "redux";
import userStore from "./userStore";
import cleaning from "./cleaning";

const rootReducer = combineReducers({
  userStore,
  cleaning,
});

export default rootReducer;
