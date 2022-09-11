
import React, { useState, useEffect, useCallback } from "react";

import Movie from "./Movie";

import '../App.css';

import { isLoadingMovies } from "./store/toggleIsFetchingReducer";

import { useDispatch } from 'react-redux';

// import getMoviesListThunk from './store/thunk/LoadingMovieList'

import addMovies from './store/thunk/LoadingMovieList';
import fetchMovies from './store/thunk/LoadingMovieList';

function Movies(props) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);

  const { items, setItems, findFilms } = props;

  const [isLoading, setLoading] = useState(false);

  const [isEmpty, setEmpty] = useState(false);

  const [isError, setError] = useState(false);




  useEffect(() => {
    fetchFilms()
    dispatch(fetchMovies());
  }, [value]);

  // useEffect(() => {
  //   console.log(isLoading)

  // }, [isLoading])
  function changeSelect(event) {


    if (event.target.value === "Минск") {
      setValue(1);

      return setValue(1);
    } else {

      return (setValue(5))
    }
  };

  const fetchFilms = useCallback(async () => {
    setLoading(true);

    try {
      // const data = getMoviesListThunk(value)
      const data = await fetch(`https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22city%22:${value}%7D&extended=true`)
      // const item = [];
      console.log(value)
      const item = await data.json();

      setLoading(false);

      setItems(item);

      if (item.length === 0) {
        setEmpty(true);
      }

      if (item.length > 1 && item.length < 20) {
        throw new Error("ошибка запроса")
      }
    } catch (e) {
      setError(true)
    }
  }, [])

  if (isLoading) {

    return (
      <span className="loader"></span>
    )
  }


  return (
    <div>
      {isError
        ?
        (<div> “Ooops, something went wrong” </div>)
        : (

          isLoading
            ? (<div>Movies are Loading</div>)

            : (
              isEmpty ?
                (<p>We’ve found no movies, sorry!</p>)
                :
                (<>
                  <select onChange={changeSelect} className="selectCity">
                    <option>Минск</option>
                    <option>Гродно</option>
                  </select>
                  {findFilms.length > 0 ? findFilms.map((item) => <Movie key={item.eventId} item={item} />) : items.map((item) => <Movie key={item.eventId} item={item} />)}
                  {/* {items.map((item) => <Movie key={item.eventId} item={item} />)}; */}
                </>)
            )
        )}
    </div>
  );
}

export default Movies;
