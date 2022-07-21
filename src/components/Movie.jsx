import React, { useState, useEffect } from "react";

import Button from "./Button";

import '../App.css';

const Movie = (props) => {
  const { item } = props;

  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const goUpButton = () => {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div >
      <button className={scroll < 200 ? 'goUp' : "show"} onClick={goUpButton}> Go Up</button>
      <div className='movieCard' >

        <h1>{item.name}</h1>

        <img src={item.posterLink} alt='movie' />

        <Button buttonDiscription={item.eventId} />
      </div>
    </div>
  )
}

export default Movie;
