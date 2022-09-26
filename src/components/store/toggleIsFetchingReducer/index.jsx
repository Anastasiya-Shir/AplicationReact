import { createSlice } from "@reduxjs/toolkit";

const toggleIsFetching = createSlice({

  name: "isLoading",
  initialState: {
    isLoading: { isLoading: false },
  },
  reducers: {
    isLoadingMovies(state, action) {
      state.isLoading = action.payload.isLoading;
    },
  }

})
export const { isLoadingMovies } = toggleIsFetching.actions;
