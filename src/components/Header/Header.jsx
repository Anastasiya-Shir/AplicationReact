import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import logo from '../../logo.png';

import useDebounce from "../../service/use-debounce";

import { getFilm } from '../store/searchQuery';
import { isModalOpen } from '../store/ModalSlice';
import { isUserAuthoriz } from "../store/isUserAutherized";

function Header(props) {
  const { setFindFilms } = props;

  const [isUserAuthorized, setIsUserAuthorized] = useState(false);

  const [inputSearch, setInputSearch] = useState('');

  const debouncedSearchTerm = useDebounce(inputSearch, 1000);

  const searchFilms = useSelector(state => state.search.search);

  const authorized = useSelector(state => state.authorized.email);

  const dispatch = useDispatch();

  const items = useSelector(state => state.addMovies.films)

  let searchFilm = () => {

    let findFilms = items.filter(items =>
      items.acronym.toUpperCase().includes(searchFilms[searchFilms.length - 1].searchFilms.toUpperCase()))

    if (findFilms) {
      setFindFilms(findFilms)
    }
  };

  function Def(e) {
    e.preventDefault();
  }

  function search(e) {
    setInputSearch(e.target.value)
  }

  useEffect(() => {
    const newMovies = inputSearch;

    setInputSearch(newMovies);

    dispatch(getFilm({ inputSearch }));
    // Убедиться что у нас есть значение (пользователь ввел что-то)

  }, [inputSearch]);

  useEffect(() => {
    searchFilm();

  }, [debouncedSearchTerm]);

  useEffect(() => {

    if (authorized.length) {
      console.log(authorized.length, "authorized.length")
      setIsUserAuthorized(authorized);

      dispatch(isModalOpen(false))
    }
  }, [authorized]);


  return (
    <div className='header'>
      <div className='logoSearch'> <img src={logo} className="logo" alt=" movie poster" />
        <form onSubmit={Def}>
          <input type="search" onChange={search
          } placeholder='serch'>

          </input>
        </form>
      </div>

      {isUserAuthorized === false
        ? <button type="button" onClick={function () {
          dispatch(isModalOpen(true))
        }}> Sign in  </button>
        :
        <div > Hello, {isUserAuthorized}

          <button type="button" onClick={function () {
            dispatch(isUserAuthoriz({ email: "" }))
            setIsUserAuthorized(false)
          }}> Sign out  </button>
        </div>}
    </div>
  )
};
export default Header;
