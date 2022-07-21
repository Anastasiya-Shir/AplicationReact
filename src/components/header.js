import React from 'react';


import logo from '../logo.png';

function Header(props) {

  const { setOpen } = props
  const emailJson = localStorage.getItem('isUserAuthrized');// почему  получает nul ??
  const usersEmail = JSON.parse(emailJson);
  console.log({ emailJson })

  return (
    <div className='header'>

      <img src={logo} className="logo" alt=" movie poster" />
      {/* <p>{email}</p> */}
      <button type="button" onClick={function () { setOpen(true) }}> Open Modal </button>
    </div>
  )
};
export default Header;
