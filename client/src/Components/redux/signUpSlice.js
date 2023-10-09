/** @format */
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

export const signUpThunk = createAsyncThunk(
  "signup/fetch",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:4000/register", userData);
      return res.data; // Return the response data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const signUpSlice = createSlice({
  name: "signup",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
    error: null, // Initialize error
  },

  extraReducers: builder => {
    builder
      .addCase(signUpThunk.pending, state => {
        state.status = STATUSES.LOADING;
      })
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.data = action.payload; // Push data to the array
        state.status = STATUSES.IDLE;
      })
      .addCase(signUpThunk.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
        state.error = action.payload.message;
      });
  },
});

export const {} = signUpSlice.actions;

export default signUpSlice.reducer;
