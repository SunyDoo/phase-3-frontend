import React from "react";
import UserCard from "./UserCard";

function Users({ users }) {
  return (
    <>
      <div>
        <ul>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Users;
