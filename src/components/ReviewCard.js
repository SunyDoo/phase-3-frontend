import React, { useState } from "react";
import EditReview from "./EditReview";

function ReviewCard({ review, updateReview, handleDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleUpdateReview(updatedReview) {
    setIsEditing(false);
    updateReview(updatedReview);
  }

  function handleDeleteClick(e) {
    fetch(`http://localhost:9292/reviews/${review.id}`, {
      method: "DELETE",
    });
    handleDelete(review);
  }

  return (
    <li className="list">
      {isEditing ? (
        <EditReview
          key={review.id}
          review={review}
          onUpdateReview={handleUpdateReview}
        />
      ) : (
        <p>
          {review.movie.title}: {review.comment}
        </p>
      )}
      <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
        <span role="img" aria-label="edit">
          ✏️
        </span>
      </button>
      <button onClick={handleDeleteClick}>
        <span role="img" aria-label="delete">
          🗑
        </span>
      </button>
    </li>
  );
}

export default ReviewCard;

// {findAverageAge(average) > 70 ? 🍅 : 👎}
