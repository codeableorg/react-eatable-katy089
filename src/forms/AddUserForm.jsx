import React, { useState } from 'react';

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: '', price: '', description:'', category:'',picture_url:'' };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.price) return;

        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <p>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
      </p>
      <p>
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={user.price}
          onChange={handleInputChange}
        />
      </p>
      <p>
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={user.description}
          onChange={handleInputChange}
        />
      </p>
      <p>
        <label>Category</label>
        <input
          type="text"
          name="category"
          value={user.category}
          onChange={handleInputChange}
        />
      </p>
      <p>
        <label>Picture URL</label>
        <input
          type="url"
          name="picture_url"
          value={user.picture_url}
          onChange={handleInputChange}
        />
      </p>
      <p>
        <button>Add new user</button>
      </p>
    </form>
  );
};

export default AddUserForm;
