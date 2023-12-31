import axios from "axios";
import {
  CLEAR_ERRORS,
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  SEND_MESSAGE_FAIL,
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SINGLE_USER_FAIL,
  SINGLE_USER_REQUEST,
  SINGLE_USER_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
} from "../constants/userConstants";

// login User
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = {
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.post(
      `http://localhost:4000/login`,
      {
        email,
        password,
      },
      config
    );
    // console.log(data);
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    // console.log(error)
    dispatch({ type: LOGIN_FAIL, payload: error?.response?.data?.message });
  }
};

// Register User
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const { data } = await axios.post(
      `http://localhost:4000/register`,
      userData,
      { withCredentials: true }
    );
    console.log(data);
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error?.response?.data?.error,
    });
  }
};

// Load User

export const LoadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });
    const { data } = await axios.get(`http://localhost:4000/me`, {
      withCredentials: true,
    });
    console.log(data, "loaduser");
    
    dispatch({ type: LOAD_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error?.response?.data?.error });
  }
};

// Update Profile
export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });

    const config = {
      withCredentials: true,
    };
    const { data } = await axios.put(
      `http://localhost:4000/update/profile`,
      userData,
      config
    );
    console.log(userData);
    // console.log(dispatch);
    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error?.response?.data?.error,
    });
  }
};
// Update Password
export const updatePassword = (password) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    console.log(password);
    const { data } = await axios.put(
      `http://localhost:4000/change/password`,
      password,
      config
    );
    console.log(data);
    // console.log(dispatch);
    dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error?.response?.data?.error,
    });
  }
};

// forgot password
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });

    const config = {
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    };
    const res = await axios.post(
      `http://localhost:4000/api/v1/forgot/password`,
      {
        email,
      },
      config
    );
    console.log(res);
    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: res.data?.user });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error?.response?.data?.error,
    });
  }
};

// Reset password
export const resetPassword =
  (token, password, confirmPassword) => async (dispatch) => {
    try {
      dispatch({ type: RESET_PASSWORD_REQUEST });

      const config = {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      };
      const res = await axios.put(
        `http://localhost:4000/api/v1/password/reset/${token.token}`,
        { password, confirmPassword },
        config
      );
      dispatch({ type: RESET_PASSWORD_SUCCESS, payload: res.data?.success });
    } catch (error) {
      dispatch({
        type: RESET_PASSWORD_FAIL,
        payload: error?.response?.data?.error,
      });
    }
  };

// logo Out user
export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });
    await axios.get(`http://localhost:4000/logout`, {
      withCredentials: true,
    });

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error?.response?.data?.error });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

// Contact us (Send Message)

export const SendMessage = (inputdata) => async (dispatch) => {
  try {
    dispatch({ type: SEND_MESSAGE_REQUEST });

    const { data } = await axios.post(
      `http://localhost:4000/send/message`,
      inputdata,
      { withCredentials: true }
    );
    // console.log(inputdata)
    // console.log(data);

    dispatch({ type: SEND_MESSAGE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SEND_MESSAGE_FAIL,
      payload: error?.response?.data?.error,
    });
  }
};

//Singleuser id 

export const Singleuserid = (id) => async (dispatch) => {
  try {
    // console.log(id)
    dispatch({ type: SINGLE_USER_REQUEST });

    const {data} = await axios.get(
      `http://localhost:4000/admin/user/${id}`,
      { withCredentials: true }
    );
     console.log(data)
     

    dispatch({ type: SINGLE_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SINGLE_USER_FAIL,
      payload: error?.response?.data?.error,
    });
    console.log(error)
  }
}