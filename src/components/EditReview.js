import React, { useState } from "react";

function EditReview({ review, onUpdateReview }) {
  const [comment, setComment] = useState(review.comment);
  const [score, setScore] = useState(review.score);

  function handleFormSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/reviews/${review.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: comment,
        score: score,
      }),
    })
      .then((r) => r.json())
      .then((updatedReview) => onUpdateReview(updatedReview));
  }

  return (
    <form className="edit-comment" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="score"
        autoComplete="off"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />
      <input
        type="text"
        name="comment"
        autoComplete="off"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
  );
}

export default EditReview;
