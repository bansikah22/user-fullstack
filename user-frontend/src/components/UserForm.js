import React, { useState, useEffect } from "react";

const UserForm = ({ buttonLabel, handleSubmit, initialUser }) => {
  const [user, setUser] = useState({ id: "", name: "", email: "" });

  useEffect(() => {
    if (initialUser) setUser(initialUser); // Prefill form with user data if editing
  }, [initialUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(user);
    setUser({ id: "", name: "", email: "" }); // Clear the form
  };

  return (
    <form onSubmit={onSubmit} style={{ marginBottom: "20px", textAlign: "center" }}>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Name"
        onChange={handleChange}
        required
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <input
        type="email"
        name="email"
        value={user.email}
        placeholder="Email"
        onChange={handleChange}
        required
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <button type="submit" style={{ padding: "5px 10px", backgroundColor: "#007bff", color: "white", border: "none" }}>
        {buttonLabel}
      </button>
    </form>
  );
};

export default UserForm;
