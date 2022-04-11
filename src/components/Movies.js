import React from "react";
import MovieCard from "./MovieCard";

function Movies({ movies }) {
  return (
    <>
      <div class="topContainer">
        <ol class="topContainer">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} className="card" />
          ))}
        </ol>
      </div>
    </>
  );
}

export default Movies;
