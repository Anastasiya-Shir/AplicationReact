
import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import '../App.css';

function Films() {

  useEffect(() => {
    fetchFilms()
  }, []);

  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchFilms = async () => {
    setLoading(true);
    setLoading(false);
    const data = await fetch('https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22city%22:1%7D&extended=true')

    const item = await data.json();

    setItems(item);

  }
  if (isLoading) {

    return (
      <div>Movies are Loading</div>
    )
  }
  return (

    <div>

      {items.map(item => <Movie item={item} />)


      }
    </div>
  )
};

export default Films;
