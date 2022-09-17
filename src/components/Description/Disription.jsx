import React, { useState, useEffect, useCallback } from "react";
import { useParams } from 'react-router-dom';

const Description = () => {
  const [post, setPost] = useState([]);

  const { name, annotation, posterLink } = post;

  const { eventId } = useParams();

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const data = await fetch(`https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22event%22:%22${eventId}%22,%22city%22:%221%22%7D&extended=true  `)

    const posts = await data.json();

    const post = posts[0];

    setPost(post);
  }

  return (
    <div className="movie-details">

      <h1>"{name}"</h1>

      <p> {annotation}</p>

      <img src={posterLink} alt="movie" />
    </div>
  );
}

export default Description;

