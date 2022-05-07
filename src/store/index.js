import { createStore } from "redux";
// import TodoListReducer from "./reducers/TodoListReducer";
import reducers from "./reducers";

const store = createStore(reducers)

export default store