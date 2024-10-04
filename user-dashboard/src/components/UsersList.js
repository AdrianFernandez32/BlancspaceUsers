import React from "react";
import UserCard from "./UserCard";

function UserList() {
  // TODO: Fetch users from the API and store them in a state.

  const users = []; // Placeholder: Replace with state once users are fetched.

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.length > 0 ? (
        users.map((user) => <UserCard key={user.id} user={user} />)
      ) : (
        <p>No users available. Please fetch data from the API.</p>
      )}
    </div>
  );
}

export default UserList;
