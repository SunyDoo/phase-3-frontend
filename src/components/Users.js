import React from "react";
import UserCard from "./UserCard";

function Users({ users }) {
  return (
    <>
      <div>
        <ol>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </ol>
      </div>
    </>
  );
}

export default Users;
