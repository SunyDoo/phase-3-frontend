import React from "react";
import MovieCard from "./MovieCard";

function Movies({ movies }) {
  return (
    <>
      <div>
        <ul class="topContainer">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} className="card" />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Movies;
