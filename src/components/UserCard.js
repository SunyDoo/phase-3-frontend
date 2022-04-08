import React, { useState, useEffect } from "react";

function UserCard({ user }) {
  const [reviews, setReviews] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:9292/users/${user.id}`)
      .then((r) => r.json())
      .then((users) => setReviews(users.reviews));
  }, []);

  function handleClick() {
    setShow((show) => !show);
  }

  return (
    <li>
      <h1 onClick={handleClick}>{user.name}</h1>
      <h2>{user.publication}</h2>
      <ol style={show ? {} : { display: "none" }}>
        {reviews.map((review) => (
          <h3>
            {review.movie.title}: {review.comment}
          </h3>
        ))}
      </ol>
    </li>
  );
}

export default UserCard;
