import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Users from "./Users"
import Movies from "./Movies";

function App() {
  const [movies, setMovies] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/movies")
      .then((r) => r.json())
      .then((movies) => setMovies(movies));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/reviews")
      .then((r) => r.json())
      .then((reviews) => setReviews(reviews));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((r) => r.json())
      .then((users) => setUsers(users));
  }, []);

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
          <Users users={users} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
