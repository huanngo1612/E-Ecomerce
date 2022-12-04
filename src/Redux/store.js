import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { UserLoginReducer } from "./Reducers/UserReducer";

const reducer = combineReducers({
  userLogin: UserLoginReducer,
});
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = { userInfo: { userInfoFromLocalStorage } };

const middleware = [thunk];
const store = configureStore(
  { reducer },
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
