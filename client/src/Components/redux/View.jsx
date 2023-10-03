/** @format */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginuserdata } from "./Reducer";
import { loginuser } from "./Action";

export const View = () => {
  const selecter = useSelector(state => state.loginuserdata);

  console.log(selecter)
  return (
    <div>
      <span>{selecter}</span>
    </div>
  );
};
