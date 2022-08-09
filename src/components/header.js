import React, { useEffect, useState } from 'react';

import logo from '../logo.png';

function Header(props) {
  const [isUserAuthorized, setIsUserAuthorized] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem('isUserAuthrized');
    const usersauth = JSON.parse(auth) || [];
    setIsUserAuthorized(usersauth.email)
  }, [])

  const { setOpen } = props;

  window.addEventListener('storage', (e) => {
    const emailJson = localStorage.getItem('isUserAuthrized');
    const usersEmail = JSON.parse(emailJson) || [];
    setIsUserAuthorized(usersEmail.email);
    setOpen(false);
  })

  return (
    <div className='header'>

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
