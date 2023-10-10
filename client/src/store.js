import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import {
//   productDetailsReducer,
//   productReducer,
// } from "./reducers/productReducer";
import { userReducer } from "./reducers/userReducer";
// import {
//   forgotPasswordReducer,
//   profileReducer,
// } from "./reducers/profileReducer";

const reducer = combineReducers({
  // products: productReducer,
  // productDetails: productDetailsReducer,
  user: userReducer,
  // profile: profileReducer,
  // forgotPassword: forgotPasswordReducer,
});

let intialstate = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  intialstate,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
