import { createSlice } from "@reduxjs/toolkit"; let i = 0;
const modalSlice = createSlice({

  name: "islOpen",
  initialState: {
    isOpen: false,
  },
  reducers: {
    isModalOpen(state, action) {
      state.isOpen = action.payload;
      console.log(state.isOpen, 'action');
    }
  }
})
export const { isModalOpen } = modalSlice.actions;
export default modalSlice.reducer;
