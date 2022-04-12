import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";

function Users({ movies }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((r) => r.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <>
      <div>
        <ol>
          {users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              reviews={user.reviews}
              movies={movies}
            />
          ))}
        </ol>
      </div>
    </>
  );
}

export default Users;
