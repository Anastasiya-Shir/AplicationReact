import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useDebounce from "../../service/use-debounce";

import { getFilm } from '../store/searchQuery';
import { isModalOpen } from '../store/ModalSlice';
import { isUserAuthoriz } from "../store/isUserAutherized";
import { isUserAuth, searchFilms, authoriz, list, findfilm, lists } from '../store/selectors';

import logo from '../../logo.png';

function Header(props) {
  const { setFindFilms } = props;

  const isAuth = useSelector(isUserAuth);

  const [isUserAuthorized, setIsUserAuthorized] = useState(false);

  const [inputSearch, setInputSearch] = useState('');

  const debouncedSearchTerm = useDebounce(inputSearch, 1000);

  const searchMovie = useSelector(searchFilms);

  const authorized = useSelector(authoriz);

  const findFilms = useSelector(findfilm);

  const dispatch = useDispatch();

  const items = useSelector(list);

  let searchFilm = () => {

    if (findFilms) {
      setFindFilms(findFilms)
    }
  };

  function doNoUpdate(e) {
    e.preventDefault();
  }
  const handleSearch = (e) => setInputSearch(e.target.value);


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

      dispatch(isModalOpen(false))
    }
  }, [authorized]);


  return (
    <div className='header'>
      <div className='logoSearch'> <img src={logo} className="logo" alt=" movie poster" />
        <form onSubmit={doNoUpdate}>
          <input type="search" onChange={handleSearch
          } placeholder='serch'>

          </input>
        </form>
      </div>

      {isAuth == false
        ? <button type="button" onClick={function () {
          dispatch(isModalOpen(true))
        }}> Sign in  </button>
        :
        <div > Hello, {isAuth}

          <button type="button" onClick={function () {
            dispatch(isUserAuthoriz({ email: false }))
            // setIsUserAuthorized(false)
          }}> Sign out  </button>
        </div>
      }
    </div>
  )
};
export default Header;
