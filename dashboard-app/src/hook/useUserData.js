import { useEffect, useState } from "react";
import axios from "axios";

const useUserData = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");


  // Initial fetching of the users data

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
      setFilteredUsers(response.data);
    };
    fetchUsers();
  }, []);


  // Filtering of users

  useEffect(() => {
    let sortedUsers = [...users];
    if (sort) {
      sortedUsers = sortedUsers.sort((a, b) =>
        a[sort].localeCompare(b[sort])
      );
    }
    const searchedUsers = sortedUsers.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.username.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(searchedUsers);
  }, [search, sort, users]);

  return { filteredUsers, search, setSearch, setSort };
};

export default useUserData;
