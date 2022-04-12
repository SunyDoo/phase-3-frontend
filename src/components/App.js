import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Users from "./Users";
import Movies from "./Movies";
import AddMovie from "./AddMovie";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/movies")
      .then((r) => r.json())
      .then((movies) => setMovies(movies));
  }, []);

  function handleAddMovie(newMovie) {
    setMovies([...movies, newMovie]);
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <h1>Welcome To</h1>
          <img
            src="https://i.pinimg.com/originals/e6/de/55/e6de557d0df49736cd27c5c7ead566a9.jpg"
            alt="Movie Logo"
            className="homeImage"
          />
        </Route>
        <Route exact path="/movies">
          <Movies movies={movies} />
        </Route>
        <Route exact path="/users">
          <Users movies={movies} />
        </Route>
        <Route exact path="/addmovie">
          <AddMovie onAddMovie={handleAddMovie} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
