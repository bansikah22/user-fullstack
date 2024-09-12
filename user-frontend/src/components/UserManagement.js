import React, { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "./UserForm"; // Corrected import path
import UserTable from "./UserTable"; // Corrected import path

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // State to handle editing
  const [currentUser, setCurrentUser] = useState({ id: "", name: "", email: "" }); // State to store current user for editing

  const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8082/api";

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${apiUrl}/users`);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users: ", error);
    }
  };

  const addUser = async (user) => {
    try {
      await axios.post(`${apiUrl}/users/add`, user);
      fetchUsers();
    } catch (error) {
      console.error("Error adding user: ", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${apiUrl}/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user: ", error);
    }
  };

  const startEditing = (user) => {
    setIsEditing(true); // Show the update form
    setCurrentUser(user); // Set the user details to be updated
  };

  const updateUser = async (user) => {
    try {
      await axios.put(`${apiUrl}/users/${user.id}`, user);
      setIsEditing(false); // Hide the update form after updating
      setCurrentUser({ id: "", name: "", email: "" }); // Reset current user
      fetchUsers();
    } catch (error) {
      console.error("Error updating user: ", error);
    }
  };

  return (
    <div style={{ backgroundColor: "#f0f8ff", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#007bff" }}>User Management</h1>
      {isEditing ? (
        <UserForm
          buttonLabel="Update User"
          handleSubmit={updateUser}
          initialUser={currentUser}
        />
      ) : (
        <UserForm buttonLabel="Add User" handleSubmit={addUser} />
      )}
      <UserTable
        users={users}
        deleteUser={deleteUser}
        startEditing={startEditing}
      />
    </div>
  );
};

export default UserManagement;
