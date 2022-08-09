import React from "react";
import { Link } from 'react-router-dom';

const NotFoundPage = () => {

  return (
    <div><Link to={`/`} >Go to HomePage</Link>
      <h1>404 not wound, we have no such page </h1>
    </div>
  )
}

export default NotFoundPage;
