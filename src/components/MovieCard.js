import React from "react";

function MovieCard({ movie }) {
  return (
    <li>
      <h1>{movie.title}</h1>
      <img src={movie.image} alt={movie.title} />
    </li>
  );
}

export default MovieCard;
