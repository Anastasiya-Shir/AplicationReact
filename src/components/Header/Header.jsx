import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import logo from '../../logo.png';

import useDebounce from "../../service/use-debounce";

import { getFilm } from '../store/searchQuery';
import { isModalOpen } from '../store/ModalSlice';

function Header(props) {
  const { setOpen, setFindFilms } = props;

  const [isUserAuthorized, setIsUserAuthorized] = useState('');

  const [inputSearch, setInputSearch] = useState('');

  const debouncedSearchTerm = useDebounce(inputSearch, 1000);

  const searchFilms = useSelector(state => state.search.search);

  const dispatch = useDispatch();
  const items = useSelector(state => state.addMovies.films)

  window.addEventListener('storage', (e) => {
    const emailJson = localStorage.getItem('isUserAuthrized');

    const usersEmail = JSON.parse(emailJson) || [];

    setIsUserAuthorized(usersEmail.email);

    dispatch(isModalOpen(false))
  })

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
    const auth = localStorage.getItem('isUserAuthrized');

    const usersauth = JSON.parse(auth) || [];

    setIsUserAuthorized(usersauth.email);
  }, []);

  useEffect(() => {
    searchFilm();

  }, [debouncedSearchTerm]);

  return (
    <div className='header'>

      <form onSubmit={Def}>

        <input type="search" onChange={search
        } placeholder='serch'>

        </input>
      </form>

      <img src={logo} className="logo" alt=" movie poster" />
      {isUserAuthorized === undefined
        ? <button type="button" onClick={function () {
          // setOpen(true)
          dispatch(isModalOpen(true))
        }}> Sign in  </button>
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
