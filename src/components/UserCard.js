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
      <h3>{user.publication}</h3>
      <ul style={show ? {} : { display: "none" }}>
        {reviews.map((review) => (
          <p>
            {review.movie.title}: {review.comment}
          </p>
        ))}
      </ul>
    </li>
  );
}

export default UserCard;
