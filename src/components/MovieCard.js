import React, { useState, useEffect } from "react";

function MovieCard({ movie }) {
  const [scores, setScores] = useState([]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:9292/movies/${movie.id}`)
      .then((r) => r.json())
      .then((movie) => setScores(movie.reviews));
  }, []);
  
  function handleClick() {
    setDisplay((display) => !display);
  }

  return (
    <li>
      <h1>{movie.title}</h1>
      <img src={movie.image} alt={movie.title} onClick={handleClick} />
      <span>
        <ol style={display ? {} : { display: "none" }}>
          {scores.map((score) => (
            <p>
              {score.user.publication}: {score.score}
            </p>
          ))}
        </ol>
      </span>
    </li>
  );
}

export default MovieCard;
