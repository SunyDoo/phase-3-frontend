import React, { useState } from "react";

function AddReview({ onAddReview, user }) {
  const [movieNumber, setMovieNumber] = useState(1);
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const reviewData = {
      movie_id: movieNumber,
      score: score,
      comment: comment,
      user_id: user.id,
    };
    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((r) => r.json())
      .then((newReview) => onAddReview(newReview));
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Movie Number:
            <input
              type="text"
              name="movieNumber"
              value={movieNumber}
              onChange={(e) => setMovieNumber(e.target.value)}
            />
          </label>
          <label>
            Score:
            <input
              type="text"
              name="score"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </label>
          <label>
            Comment:
            <input
              type="text"
              name="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </label>
          <button type="submit">Add Review</button>
        </form>
      </div>
    </>
  );
}

export default AddReview;
