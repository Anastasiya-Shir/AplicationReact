import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from 'axios';

import { MINSK } from "../../../const/Const";

export const fetchMovies = createAsyncThunk(

  'fetchFilms/fetchMovies', async () => {
    const response = await axios.get(
      `https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22city%22:${MINSK}%7D&extended=true`
    );

    return response.data;
  });

const toggleIsFetching = createSlice({

  name: "fetchFilms",
  initialState: {
    films: [],
    status: null,
    error: false,
  },
  reducers: {
    addMovies(state, action) {
      console.log(action);

    }
  },
  extraReducers: {
    [fetchMovies.pending]: (state, action) => {
      state.status = false;
      state.error = false;
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.films = action.payload;
      state.status = true;
      state.error = false;

    },
    [fetchMovies.rejected]: (state, action) => {
      state.status = false;
      state.error = action.payload
      console.log("error")
    }
  }
}

)
export const { addMovies } = toggleIsFetching.actions;
export default toggleIsFetching.reducer;
