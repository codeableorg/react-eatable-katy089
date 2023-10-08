import React, { useState } from 'react'

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Price</label>
      <input type="number" name="price" value={user.price} onChange={handleInputChange} />
      <label>Description</label>
      <input type="text" name="description" value={user.description} onChange={handleInputChange} />
      <label>Category</label>
      <input type="text" name="category" value={user.category} onChange={handleInputChange} />
      <label>Picture URL</label>
      <input type="image" name="picture_url" value={user.picture_url} onChange={handleInputChange} />

      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm