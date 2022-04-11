import React, { useState, useEffect } from "react";
import EditReview from "./EditReview";

function ReviewCard({ review, updateReview }) {
    const [isEditing, setIsEditing] = useState(false);
//   const [display, setDisplay] = useState(false);
//   const [average, setAverage] = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:9292/movies/${movie.id}`)
//       .then((r) => r.json())
//       .then((movie) => setScores(movie.reviews));
//   }, []);

//   useEffect(() => {
//     fetch(`http://localhost:9292/movies/${movie.id}/average_score`)
//       .then((r) => r.json())
//       .then((movie) => setAverage(movie.reviews));
//   }, []);

//   function handleClick() {
//     setDisplay((display) => !display);
//   }
function handleUpdateReview(updatedReview) {
    setIsEditing(false);
    updateReview(updatedReview);
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
        <p>{review.movie.title}: {review.comment}</p>
      )}      
      <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
            <span role="img" aria-label="edit">
              ✏️
            </span>
          </button>
          <button >
            <span role="img" aria-label="delete">
              🗑
            </span>
          </button>      
    </li>
  );
}

export default ReviewCard;

// {findAverageAge(average) > 70 ? 🍅 : 👎}
