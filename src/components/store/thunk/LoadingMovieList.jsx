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


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk(
  'fetchFilms/fetchMovies',
  async function () {
    const data = await fetch(`https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22city%22:1%7D&extended=true`)
    // const item = []; 

    const item = await data.json();
    return item;
  }

);

const toggleIsFetching = createSlice({


  name: "fetchFilms",
  initialState: {
    films: [],
  },
  reducers: {
    addMovies(state, action) {
      console.log(action);

    }
  },
  extraReducers: {
    // [fetchMovies.pending]: (state, action) => {
    //   //загрузка
    // },
    [fetchMovies.fulfilled]: (state, action) => {
      state.films = action.payload;
    },
    [fetchMovies.rejected]: (state, action) => {
      console.log("error")
    }
  }
}

)
export const { addMovies } = toggleIsFetching.actions;
export default toggleIsFetching.reducer;
