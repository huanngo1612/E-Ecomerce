import { authApp } from "../../config/firebase";
import {
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../Constants/UserConstants";

//LOGIN
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { user } = await authApp.signInWithEmailAndPassword(email, password);
    console.log(user);

    const Info = {
      email: user.email,
      id: user.uid,
      name: user.displayName,
    };
    localStorage.setItem("userInfo", JSON.stringify(Info));
    console.log("user", Info);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: user,
    });
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, payload: error.message });
  }
};

//LOGOUT
export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
  document.location.href = "/login";
};

//REGISTER
export const register = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { user } = await authApp.createUserWithEmailAndPassword(
      email,
      password
    );
    console.log(user);

    const Info = {
      email: user.email,
      id: user.uid,
      name: user.displayName,
    };
    localStorage.setItem("userInfo", JSON.stringify(Info));
    console.log("user", Info);
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: user,
    });
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: user,
    });
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
  }
};

//LIST USER
export const listUser = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const user = 1;
    // const { user } = await axios.get("");

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: user,
    });
  } catch (error) {
    dispatch({ type: USER_LIST_FAIL, payload: error.message });
  }
};
