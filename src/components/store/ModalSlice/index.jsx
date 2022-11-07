import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({

  name: "islOpen",
  initialState: {
    isOpen: false,
  },
  reducers: {
    isModalOpen(state, action) {
      state.isOpen = action.payload;
    }
  }
})
export const { isModalOpen } = modalSlice.actions;
export default modalSlice.reducer;
