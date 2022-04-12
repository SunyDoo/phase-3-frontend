import React from "react";
import MovieCard from "./MovieCard";

function Movies({ movies }) {
  return (
    <>
      <div className="cardList">
        <ol className="topContainer">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              reviews={movie.reviews}
              className="card"
            />
          ))}
        </ol>
      </div>
    </>
  );
}

export default Movies;
