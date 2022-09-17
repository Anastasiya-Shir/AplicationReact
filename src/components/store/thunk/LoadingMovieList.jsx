// import { LineAxisOutlined } from "@mui/icons-material";

// import axios from 'axios';



// const getMoviesListThunk = (value) => {
//   async (dispatch) => {
//     const data = await axios.get(`https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22city%22:${value}%7D&extended=true`)
//     const item = await data.json();
//     console.log(item)
//     return item
//   }
// }
// export default getMoviesListThunk


import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk(

  'fetchFilms/fetchMovies',
  async function (_, isRejectedWithValue) {

    const value = 1;
    try {
      const data = await fetch(`https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22city%22:${value}%7D&extended=true`)
      if (!data.ok) {
        throw new Error("Server error")
      }
      const item = await data.json();
      return item;
    } catch (error) {
      return isRejectedWithValue(error.messege)
    }

    // const item = []; 



  }

);

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
      console.log("load")
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
