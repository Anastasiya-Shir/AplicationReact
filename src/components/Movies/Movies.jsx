
import React, { useState, useEffect, useCallback } from "react";

import { useSelector, useDispatch } from 'react-redux';

import Movie from "../Movie/Movie";
import '../../App.css';

import { fetchMovies } from '../store/thunk/LoadingMovieList';
import { MINSK, GRODNO } from "../../const/Const";
function Movies(props) {

  const [value, setValue] = useState(MINSK);

  const { items, setItems, findFilms } = props;

  const dispatch = useDispatch();

  const status = useSelector(state => state.addMovies.status);

  const error = useSelector(state => state.addMovies.error);

  const item = useSelector(state => state.addMovies.films)

  function changeSelect(event) {
    if (event.target.value === "Минск") {
      setValue(MINSK);

      return setValue(MINSK);
    } else {

      (setValue(GRODNO))
    }
  };


  useEffect(() => {
    dispatch(fetchMovies());
  }, [value]);

  if (!status) {
    return (
      <span className="loader"></span>
    )
  }

  // return (
  //   <div>

  if (error) {

    return <div> “Ooops, something went wrong” </div>
  } else if (!item) {

    return <p>We’ve found no movies, sorry!</p>
  } else {

    return (
      <>
        <select onChange={changeSelect} className="selectCity">
          <option>Минск</option>
          <option>Гродно</option>
        </select>
        {findFilms.length > 0 ? findFilms.map((item) => <Movie key={item.eventId} item={item} />) : item.map((item) => <Movie key={item.eventId} item={item} />)}

      </>)
  }
}

export default Movies;
