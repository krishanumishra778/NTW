import {
  CLEAR_ERRORS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAIL,
  LOGOUT_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  SINGLE_USER_REQUEST,
  SINGLE_USER_SUCCESS,
  SINGLE_USER_FAIL,
} from "../constants/userConstants";

export const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_USER_REQUEST:
    case LOAD_USER_REQUEST:
    case UPDATE_PASSWORD_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };

    case UPDATE_PROFILE_REQUEST:
    case SEND_MESSAGE_REQUEST:
    case SINGLE_USER_REQUEST:
      return {

        loading: true,
      };

    case LOGIN_SUCCESS:
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        email_verified: action?.payload?.email_verified,
        isAuthenticated: true,
        user: action?.payload?.user,
        logindata: action?.payload,
      };

    case UPDATE_PROFILE_SUCCESS:
    case REGISTER_USER_SUCCESS:
    case SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        data: action.payload,
      };
    case SINGLE_USER_SUCCESS:
      // console.log(action.payload)
      return {
        loading: false,
        // isAuthenticated: true,
        singleuser: action?.payload,  
      };

    case LOGOUT_REQUEST:
      return {
        loading: true,
        success: false,
      };

    case UPDATE_PASSWORD_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        isAuthenticated: true,
      };

    case LOGOUT_SUCCESS:
      return {
        loading: false,
        user: null,
        success: true,
        isAuthenticated: false,
      };
    case LOGOUT_FAIL:
    case UPDATE_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case LOGIN_FAIL:
    case REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case SEND_MESSAGE_FAIL:
    case SINGLE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: null,
      };

    case LOAD_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
