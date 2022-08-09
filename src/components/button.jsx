import React from "react";
import { Link } from 'react-router-dom';

function Button(props) {
  const { buttonDiscription } = props;

  return (<Link to={`/movie-description/${buttonDiscription}`}> Buy </Link>)
}

export default Button
