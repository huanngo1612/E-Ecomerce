import { combineReducers, applyMiddleware, legacy_createStore } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import {
  UserListReducer,
  UserLoginReducer,
  UserRegisterReducer,
} from "./Reducers/UserReducer";

const reducer = combineReducers({
  userLogin: UserLoginReducer,
  userRegister: UserRegisterReducer,
  userList: UserListReducer,
});
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
  userRegister: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];
const store = legacy_createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
