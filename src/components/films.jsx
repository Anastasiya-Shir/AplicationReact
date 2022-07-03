
import React, { useState, useEffect } from "react";
import Button from "./button";
import '../App.css';
import { Link } from 'react-router-dom';

function Films() {

  useEffect(() => {
    fetchFilms()
  }, []);

  const [items, setItems] = useState([]);

  const fetchFilms = async () => {
    const data = await fetch('https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22city%22:1%7D&extended=true')

    const items = await data.json();

    setItems(items);
  }

  return (

    <div>

      {items.map(item => (
        <div key={item.eventId}>

          <div className="filmCard" >

            <Link to={`/movie-description/${item.eventId}`}>{item.name}</Link>

            <img src={item.posterLink} alt="movie"></img>

            <Button />
          </div>
        </div>
      ))
      }
    </div>
  )
};

export default Films;
