import { authApp } from "../../config/firebase";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../Constants/UserConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { user } = await authApp.signInWithEmailAndPassword(email, password);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: user,
    });
    localStorage.setItem("userInfo", JSON.stringify(user));
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, payload: error.message });
  }
};
