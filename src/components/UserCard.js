import React, { useState, useEffect } from "react";
import AddReview from "./AddReview.js";
import ReviewCard from "./ReviewCard.js";

function UserCard({ user, reviews, movies }) {
  const [posts, setPosts] = useState([]);
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setPosts(reviews);
  }, []);
  console.log(posts);

  function handleClick() {
    setShow((show) => !show);
  }

  function handleDisplayClick() {
    setDisplay((display) => !display);
  }

  function handleAddReview(newReview) {
    setPosts([...posts, newReview]);
  }

  function handleUpdatedReview(updatedReview) {
    const updatedReviews = reviews.map((review) => {
      if (review.id === updatedReview.id) {
        return updatedReview;
      } else {
        return review;
      }
    });
    setPosts(updatedReviews);
  }

  return (
    <li>
      <h1 onClick={handleClick}>{user.name}</h1>
      <h3>{user.publication}</h3>
      <ul style={show ? {} : { display: "none" }}>
        {reviews.map((review) => (
          <ul>
            <ReviewCard
              key={review.id}
              review={review}
              updateReview={handleUpdatedReview}
            />
          </ul>
        ))}
      </ul>
      <button onClick={handleDisplayClick}>
        {!display ? "Add Review" : "Close"}
      </button>
      <div style={display ? {} : { display: "none" }}>
        <AddReview user={user} onAddReview={handleAddReview} movies={movies} />
      </div>
    </li>
  );
}

export default UserCard;
