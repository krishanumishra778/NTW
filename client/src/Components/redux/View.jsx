/** @format */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { varifyData } from "./Reducer";

export const View = () => {
  const selecter = useSelector(state => state.varifyData);

  console.log(selecter)
  return (
    <div>
      <span>{selecter}</span>
    </div>
  );
};
