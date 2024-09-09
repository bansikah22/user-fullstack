import React from "react";

const UserTable = ({ users, deleteUser, startEditing }) => {
  return (
    <table style={{ margin: "auto", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Name</th>
          <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Email</th>
          <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{user.name}</td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{user.email}</td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              <button
                onClick={() => startEditing(user)}
                style={{ marginRight: "10px", padding: "5px 10px", backgroundColor: "#ffc107", border: "none", color: "white" }}
              >
                Update
              </button>
              <button
                onClick={() => deleteUser(user.id)}
                style={{ padding: "5px 10px", backgroundColor: "#dc3545", border: "none", color: "white" }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
