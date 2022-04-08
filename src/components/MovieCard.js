import React, { useState, useEffect } from "react";

function MovieCard({ movie }) {
  const [scores, setScores] = useState([]);
  const [display, setDisplay] = useState(false);
  const [average, setAverage] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/movies/${movie.id}`)
      .then((r) => r.json())
      .then((movie) => setScores(movie.reviews));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:9292/movies/${movie.id}/average_score`)
      .then((r) => r.json())
      .then((movie) => setAverage(movie.reviews));
  }, []);

  function handleClick() {
    setDisplay((display) => !display);
  }

  const findAverageAge = (arr) => {
    return arr.reduce((acc, val) => {
      return acc + val.score / arr.length;
    }, 0);
  };

  return (
    <li>
      <h1>
        {movie.title} 
      </h1>
      <p>Average Critic Score: {findAverageAge(average)}%</p>
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

// {findAverageAge(average) > 70 ? 🍅 : 👎}