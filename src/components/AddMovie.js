import React, { useState } from "react";

function AddMovie({ onAddMovie }) {
  const [movie, setMovie] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("Drama");
  const [year, setYear] = useState(1999);

  function handleSubmit(e) {
    e.preventDefault();

    const movieData = {
      title: movie,
      genre: genre,
      image: image,
      year: year,
    };
    fetch("http://localhost:9292/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieData),
    })
      .then((r) => r.json())
      .then((newMovie) => onAddMovie(newMovie));
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="movie"
              value={movie}
              onChange={(e) => setMovie(e.target.value)}
            />
          </label>
          <label>
            Year:
            <input
              type="text"
              name="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </label>
          <label>
            Image:
            <input
              type="text"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
          <label>
            Genre:
            <select
              name="category"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
              <option value="Drama">Drama</option>
              <option value="Horror">Horror</option>
              <option value="Comedy">Comedy</option>
              <option value="Action">Action</option>
              <option value="Mystery">Mystery</option>
              <option value="Superhero">Superhero</option>
              <option value="Animated">Animated</option>
            </select>
          </label>
          <button type="submit">Add Movie</button>
        </form>
      </div>
      <div className="homeContainer">
        <img
          src="https://i.pinimg.com/originals/e6/de/55/e6de557d0df49736cd27c5c7ead566a9.jpg"
          alt="Movie Logo"
          className="homeImage"
        />
      </div>
    </>
  );
}

export default AddMovie;
