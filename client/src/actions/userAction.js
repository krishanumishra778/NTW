import axios from "axios";
import { CLEAR_ERRORS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    console.log(email,password)
    const config = {
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    };
    const res = await axios.post(
      `http://localhost:4000/login`,
      {
        email,
        password,
      },
      config
    );
    console.log(res);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data?.user });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error?.response?.data?.error });
  }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
