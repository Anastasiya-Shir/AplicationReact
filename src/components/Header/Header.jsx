import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import logo from '../../logo.png';

import useDebounce from "../../service/use-debounce";

import { getFilm } from '../store/searchSlice';

function Header(props) {
  const [isUserAuthorized, setIsUserAuthorized] = useState("");

  const [inputSearch, setInputSearch] = useState('');

  const debouncedSearchTerm = useDebounce(inputSearch, 1000);

  const { setOpen, items, setFindFilms } = props;

  const searchFilms = useSelector(state => state.search.search);

  const dispatch = useDispatch();


  window.addEventListener('storage', (e) => {
    const emailJson = localStorage.getItem('isUserAuthrized');

    const usersEmail = JSON.parse(emailJson) || [];

    setIsUserAuthorized(usersEmail.email);

    setOpen(false);
  })

  let searchFilm = () => {
    let findFilms = items.filter(items =>
      items.acronym.toUpperCase().includes(searchFilms[searchFilms.length - 1].searchFilms.toUpperCase()))
    if (findFilms) {
      setFindFilms(findFilms)
    }
  };

  useEffect(() => {
    const newMovies = inputSearch;

    setInputSearch(newMovies);

    dispatch(getFilm({ inputSearch }));
    // Убедиться что у нас есть значение (пользователь ввел что-то)
    if (debouncedSearchTerm) {
      searchFilm();
    }
  }, [inputSearch, debouncedSearchTerm]);

  useEffect(() => {
    const auth = localStorage.getItem('isUserAuthrized');

    const usersauth = JSON.parse(auth) || [];

    setIsUserAuthorized(usersauth.email);
  }, []);

  return (
    <div className='header'>

      <form onSubmit={e => e.preventDefault()}>

        <input type="search" onChange={function (e) {
          setInputSearch(e.target.value)
        }
        } placeholder='serch'>

        </input>
      </form>

      <img src={logo} className="logo" alt=" movie poster" />
      {isUserAuthorized === undefined
        ? <button type="button" onClick={function () { setOpen(true) }}> Sign in  </button>
        : <div > Hello, {isUserAuthorized}

          <button type="button" onClick={function () {
            localStorage.removeItem("isUserAuthrized")
            setIsUserAuthorized(undefined)
          }}> Sign out  </button>
        </div>}
    </div>
  )
};
export default Header;
