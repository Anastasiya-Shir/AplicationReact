import React from 'react';

import logo from '../logo.png';

function Header() {

  return (
    <div className='header'>

      <img src={logo} className="logo" alt=" movie poster" />

      <button className='button'> sign in</button>;
    </div>
  )
};
export default Header;
