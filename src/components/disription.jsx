
import React, { useState, useEffect } from "react";

import { useParams } from 'react-router-dom';

function Dicription() {
  const [post, setPost] = useState([]);

  const { eventId } = useParams();

  console.log(eventId)

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const data = await fetch(`https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22event%22:%22${eventId}%22,%22city%22:%221%22%7D&extended=true  `)
    const posts = await data.json();
    const post = posts[0];
    setPost(post)
  }

  return (

    <div className="movieDetails"  >

      <h1>"{post.name}"</h1>

      <p> {post.annotation}</p>

      <img src={post.posterLink} alt="movie"></img>
    </div>
  );
}

export default Dicription;

