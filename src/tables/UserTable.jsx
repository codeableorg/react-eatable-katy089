import React from "react";

const UserTable = props => (
  <table border="1">
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Description</th>
        <th>Category</th>
        <th>Picture URL</th>
        <th>Save</th>
      </tr>
    </thead>
    {props.users.length > 0 ? (
      props.users.map(user => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.price}</td>
          <td>{user.description}</td>
          <td>{user.category}</td>
          <td>{user.picture_url}</td>
          <td>
            <button
              onClick={() => {
                props.editRow(user);
              }}
              className="button muted-button"
            >
              Edit
            </button>
            <button
              onClick={() => props.deleteUser(user.id)}
              className="button muted-button"
            >
              Delete
            </button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={3}>No users</td>
      </tr>
    )}
  </table>
);

export default UserTable;
