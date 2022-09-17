import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import '../../App.css';

const Movie = (props) => {
  const { item } = props;

  const [scroll, setScroll] = useState(0);

  const navigate = useNavigate();

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


  const handleBuyTicket = (eventId) => () => {
    navigate(`/movie-description/${eventId}`)
  }

  return (
    <div >
      <button className={scroll < 200 ? 'go-up' : "show"} onClick={goUpButton}> Go Up</button>
      <div className='movieCard' >

        <h1>{item.name}</h1>

        <img src={item.posterLink} alt='movie' />

        <button onClick={handleBuyTicket(item.eventId)}> buy ticket</button>
      </div>
    </div>
  )
}

export default Movie;
