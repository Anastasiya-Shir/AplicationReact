import React from 'react';


import logo from '../logo.png';

function Header(props) {

  const { setOpen } = props

  return (
    <div className='header'>

      <img src={logo} className="logo" alt=" movie poster" />

      <button type="button" onClick={function () { setOpen(true) }}> Open Modal </button>
    </div>
  )
};
export default Header;
