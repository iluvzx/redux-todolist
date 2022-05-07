// 合并reducer
import { combineReducers } from "redux";

import HeaderReducer from "./HeaderReducer";
import TodoListReducer from "./TodoListReducer";

export default combineReducers({
  TodoListReducer,
  HeaderReducer
})