import React, { useState, useEffect } from "react";
import AddReview from "./AddReview.js";
import ReviewCard from "./ReviewCard.js";

function UserCard({ user }) {
  const [reviews, setReviews] = useState([]);
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:9292/users/${user.id}`)
      .then((r) => r.json())
      .then((users) => setReviews(users.reviews));
  }, []);

  function handleClick() {
    setShow((show) => !show);
  }

  function handleDisplayClick() {
    setDisplay((display) => !display);
  }

  function handleAddReview(newReview) {
    setReviews([...reviews, newReview]);
  }

  return (
    <li>
      <h1 onClick={handleClick}>{user.name}</h1>
      <h3>{user.publication}</h3>
      <ul style={show ? {} : { display: "none" }}>
        {reviews.map((review) => (
          <ul>
            <ReviewCard key={review.id} review={review} />
          </ul>
        ))}
      </ul>
      <button onClick={handleDisplayClick}>
        {!display ? "Add Review" : "Close"}
      </button>
      <div style={display ? {} : { display: "none" }}>
        <AddReview user={user} onAddReview={handleAddReview} />
      </div>
    </li>
  );
}

export default UserCard;
