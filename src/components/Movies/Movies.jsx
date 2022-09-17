
import React, { useState, useEffect, useCallback } from "react";

import { useSelector, useDispatch } from 'react-redux';

import Movie from "../Movie/Movie";
import '../../App.css';

import { fetchMovies } from '../store/thunk/LoadingMovieList';

function Movies(props) {

  const [value, setValue] = useState(1);

  const { items, setItems, findFilms } = props;

  const dispatch = useDispatch();

  const status = useSelector(state => state.AddMovies.status);

  const error = useSelector(state => state.AddMovies.error);

  const item = useSelector(state => state.AddMovies.films)

  function changeSelect(event) {
    if (event.target.value === "Минск") {
      setValue(1);

      return setValue(1);
    } else {

      return (setValue(5))
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

  return (
    <div>
      {error
        ?
        (<div> “Ooops, something went wrong” </div>)
        : (
          !item ?
            (<p>We’ve found no movies, sorry!</p>)
            :
            (<>
              <select onChange={changeSelect} className="selectCity">
                <option>Минск</option>
                <option>Гродно</option>
              </select>
              {findFilms.length > 0 ? findFilms.map((item) => <Movie key={item.eventId} item={item} />) : item.map((item) => <Movie key={item.eventId} item={item} />)}

            </>)
        )}
    </div>
  );
}

export default Movies;
