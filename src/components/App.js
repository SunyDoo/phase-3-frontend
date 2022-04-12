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
          <h1>Welcome To Sunil's Movie Reviews</h1>
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
