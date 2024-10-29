import React from "react";

const UserCard = ({ user, onSelect }) => (
  <div
    className="border p-4 rounded shadow-lg hover:shadow-2xl transition duration-300"
    onClick={onSelect}
  >
    <h2 className="font-bold">{user.name}</h2>
    <p>{user.username}</p>
    <button
      className="mt-4 text-blue-500 hover:underline"
      onClick={onSelect}
    >
      View Details
    </button>
  </div>
);

export default UserCard;
