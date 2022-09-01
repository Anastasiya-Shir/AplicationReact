import React, { useEffect, useState } from 'react';

import logo from '../logo.png';

import { getFilm } from './store/searchSlice';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

function Header(props) {
  const [isUserAuthorized, setIsUserAuthorized] = useState("");
  const [inputSearch, setInputSearch] = useState('');

  const navigate = useNavigate();

  const { setOpen, items, setFindFilms } = props;

  useEffect(() => {
    const auth = localStorage.getItem('isUserAuthrized');
    const usersauth = JSON.parse(auth) || [];
    setIsUserAuthorized(usersauth.email)
  }, []);

  window.addEventListener('storage', (e) => {
    const emailJson = localStorage.getItem('isUserAuthrized');
    const usersEmail = JSON.parse(emailJson) || [];
    setIsUserAuthorized(usersEmail.email);
    setOpen(false);
  })

  const searchFilms = useSelector(state => state.search.search);

  const dispatch = useDispatch();

  let searchFilm = () => {
    items.forEach(element => {
      console.log(element.acronym, "acronym")
    });

    let findFilms = items.filter(items =>
      items.acronym.toUpperCase().includes(searchFilms[searchFilms.length - 1].searchFilms.toUpperCase()))
    console.log(searchFilms, "то что ищем")
    findFilms.forEach(element => {
      console.log(element.acronym, "i find")
    });
    console.log(findFilms)
    if (findFilms) {
      setFindFilms(findFilms)
      findFilms.forEach(element => {
        console.log(element.eventId)
      });
      console.log(findFilms.eventId)
      // navigate(`/movie-search/${findFilms.eventId}`);

    }

  };

  useEffect(() => {
    const newMovies = inputSearch
    console.log(newMovies)
    setInputSearch(newMovies)
    console.log(inputSearch, 'update')
    dispatch(getFilm({ inputSearch }))
  }, [inputSearch])



  return (
    <div className='header'>
      <form onSubmit={e => e.preventDefault()}>
        <input onChange={function (e) {
          setInputSearch(e.target.value)
          console.log("передает ", inputSearch)
          searchFilm()
        }
        } placeholder='serch'>

        </input>

        {/* <button onClick={searchFilm}> search</button> */}

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
