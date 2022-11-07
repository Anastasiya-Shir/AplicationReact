import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { fetchMovies } from '../store/thunk/LoadingMovieList';
import { statusMovie, errorMovie, itemMovie } from "../store/selectors";

import Movie from "../Movie/Movie";

import { MINSK, GRODNO } from "../../const/Const";

import '../../App.css';

function Movies(props) {
  const [scroll, setScroll] = useState(0);
  const [value, setValue] = useState(MINSK);

  const { findFilms } = props;

  const dispatch = useDispatch();

  const status = useSelector(statusMovie);

  const error = useSelector(errorMovie);

  const item = useSelector(itemMovie)

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
  const goUpButton = () => {
    window.scrollTo(0, 0);
  }



  if (error) {

    return <div> “Ooops, something went wrong” </div>
  } else if (!item) {

    return <p>We’ve found no movies, sorry!</p>
  } else {

    return (
      <div className="main">
        <select onChange={changeSelect} className="selectCity" st>
          <option>Минск</option>
          <option>Гродно</option>
        </select>
        <button className={scroll < 200 ? 'go-up' : "show"} onClick={goUpButton}> Go Up</button>
        <div className="movieList">
          {findFilms.length > 0 ? findFilms.map((item) => <Movie key={item.eventId} item={item} />) : item.map((item) => <Movie key={item.eventId} item={item} setScroll={setScroll} />)}
        </div>
      </div>)
  }
}

export default Movies;
