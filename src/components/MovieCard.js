import React, { useState, useEffect } from "react";

function MovieCard({ movie, reviews }) {
  const [display, setDisplay] = useState(false);

  function handleClick() {
    setDisplay((display) => !display);
  }

  const findAverageAge = (arr) => {
    return arr.reduce((acc, val) => {
      return acc + val.score / arr.length;
    }, 0);
  };

  return (
    <li className="list">
      <h1>{movie.title}</h1>
      <p>
        {findAverageAge(reviews) > 70 ? "🍅" : "👎"}
        Average Critic Score: {findAverageAge(reviews)}%
      </p>
      <img src={movie.image} alt={movie.title} onClick={handleClick} />
      <span>
        <ol style={display ? {} : { display: "none" }}>
          {reviews.map((review) => (
            <p>
              {review.user.publication}: {review.score}
            </p>
          ))}
        </ol>
      </span>
    </li>
  );
}

export default MovieCard;

// {findAverageAge(average) > 70 ? 🍅 : 👎}
