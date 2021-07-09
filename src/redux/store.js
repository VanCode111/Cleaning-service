import { createStore } from "redux";
import rootReducer from "./reducers/rootReduser";

const store = createStore(rootReducer);

export default store;
