import React, { useState } from "react";
import UserCard from "./UserCard";
import UserModal from "./UserModal";
import useUserData from "../hook/useUserData";

const Dashboard = () => {
  const { filteredUsers, search, setSearch, setSort } = useUserData();
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or username"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded"
        />
        <select onChange={(e) => setSort(e.target.value)} className="border p-2 rounded">
          <option value="">Sort by</option>
          <option value="name">Name</option>
          <option value="username">Username</option>
        </select>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} onSelect={() => setSelectedUser(user)} />
        ))}
      </div>

      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

export default Dashboard;
