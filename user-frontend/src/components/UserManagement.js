import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import UserForm from "./UserForm"; 
import UserTable from "./UserTable"; 

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // State to handle editing
  const [currentUser, setCurrentUser] = useState({ id: "", name: "", email: "" }); // State to store current user for editing

  const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8082/api";

  const fetchUsers = useCallback(async () => {
    try {
      const response = await axios.get(`${apiUrl}/users`);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users: ", error);
    }
  }, [apiUrl]); // Include apiUrl if it might change

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]); // Include fetchUsers in the dependency array

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
