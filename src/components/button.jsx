import React from "react";
import { Link } from 'react-router-dom';

function Button(props) {

  const { buttonFir } = props;
  return (<Link to={`/movie-description/${buttonFir}`}  >
    Buy
  </Link>)
}

export default Button
