import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <Image
          src="https://cdn.pixabay.com/photo/2016/03/31/18/36/cinema-1294496__340.png"
          width="75"
          height="75"
          className="d-inline-block align-top"
          alt="Sunil's Gym Logo"
          roundedCircle
        />
      </Navbar.Brand>
      <Navbar.Brand>Sunil's Movie Reviews</Navbar.Brand>
      <Container>
        <NavLink to="/" exact style={{ color: "white" }}>
          Home
        </NavLink>
        <NavLink to="/movies" exact style={{ color: "white" }}>
          Movies
        </NavLink>
        <NavLink to="/users" exact style={{ color: "white" }}>
          Critics
        </NavLink>
        <NavLink to="/addmovie" exact style={{ color: "white" }}>
          Add Movie
        </NavLink>
      </Container>
    </Navbar>
  );
}

export default NavBar;
