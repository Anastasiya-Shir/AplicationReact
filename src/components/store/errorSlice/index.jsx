import { createSlice } from "@reduxjs/toolkit";
// import { applyMiddleware } from 'redux';
const errorSlice = createSlice({

  name: "error",
  initialState: {
    error: "",
  },
  reducers: {
    getStateError(state, action) {
      // middleware: [thunk, logger]
    }
  }

})
export const { getStateError } = errorSlice.actions;
export default errorSlice.reducer;
