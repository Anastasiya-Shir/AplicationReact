import React, { useState, useEffect } from "react";
import Films from "./films";
// import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';

function movieCard() {
  console.log("hi")
}

function Button() {
  const { eventId } = useParams();

  console.log(eventId)
  return (<button onClick={movieCard}  >
    Buy
  </button>)

  // return (
  //   // <Link to="/movie-description/:id" >Buy</Link>
  //   <Link to={`/movie-description/${eventId}`}>Buy</Link>
  // )
}

export default Button
