import React, { useState } from "react";
import AddReview from "./AddReview.js";
import ReviewCard from "./ReviewCard.js";

function UserCard({ user, reviews, movies }) {
  const [posts, setPosts] = useState(reviews);
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState(false);

  function handleClick() {
    setShow((show) => !show);
  }

  function handleDisplayClick() {
    setDisplay((display) => !display);
  }

  function handleAddReview(newReview) {
    setPosts((posts) => [...posts, newReview])
  }

  function handleUpdatedReview(updatedReview) {
    const updatedReviews = reviews.map((review) => {
      if (review.id === updatedReview.id) {
        return updatedReview;
      } else {
        return review;
      }
    });
    console.log(updatedReviews);
    setPosts(updatedReviews);
  }

  function handleDelete(deletedReview) {
    const updatedPosts = posts.filter(
      (review) => review.id !== deletedReview.id
    );
    setPosts(updatedPosts);
  }

  return (
    <li>
      <h1 onClick={handleClick}>{user.name}</h1>
      <h3>{user.publication}</h3>
      <ul style={show ? {} : { display: "none" }}>
        {posts.map((review) => (
          <ul key={review.id}>
            <ReviewCard
              review={review}
              updateReview={handleUpdatedReview}
              handleDelete={handleDelete}
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
