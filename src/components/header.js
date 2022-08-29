import React, { useEffect, useState } from 'react';

import logo from '../logo.png';

import { useSelector, useDispatch } from 'react-redux';
import { getFilm } from './store/searchSlice';

function Header(props) {
  const [isUserAuthorized, setIsUserAuthorized] = useState("");
  const [inputSearch, setInputSearch] = useState('');
  useEffect(() => {
    const auth = localStorage.getItem('isUserAuthrized');
    const usersauth = JSON.parse(auth) || [];
    setIsUserAuthorized(usersauth.email)
  }, [])

  const { setOpen, items } = props;

  window.addEventListener('storage', (e) => {
    const emailJson = localStorage.getItem('isUserAuthrized');
    const usersEmail = JSON.parse(emailJson) || [];
    setIsUserAuthorized(usersEmail.email);
    setOpen(false);
  })

  const searchFilms = useSelector(state => state.search.search)


  const dispatch = useDispatch();
  const searchFilm = () => {
    dispatch(getFilm({ inputSearch }))

  };

  return (
    <div className='header'>
      <form onSubmit={e => e.preventDefault()}>
        <input onChange={function (e) {
          setInputSearch(e.target.value)
          console.log(e.target.value)
          if (searchFilms.length > 0) {
            console.log(searchFilms[(searchFilms.length - 1)])
            console.log(items)
            let findFilms = items.find(items => items.acronym === searchFilms[0].searchFilms)
            if (findFilms) {
              console.log(findFilms.eventId)
            }
          }
        }} placeholder='serch'>

        </input>

        <button onClick={searchFilm}> search</button>

      </form>

      <img src={logo} className="logo" alt=" movie poster" />
      {isUserAuthorized === undefined
        ? <button type="button" onClick={function () { setOpen(true) }}> Sign in  </button>
        : <div > Hello, {isUserAuthorized} <button type="button" onClick={function () {
          localStorage.removeItem("isUserAuthrized")
          setIsUserAuthorized(undefined)
        }}> Sign out  </button></div>}






    </div>
  )
};
export default Header;
