import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
import "./style.css";

const App = () => {
	// Data
	const usersData = [
		{ id: 1, name: 'Old Pasta Madness', price: '24.05' ,description:'Delicious dish',category:'italian',picture_url:'https://img.freepik.com/free-photo/zucchini-cream-soup-with-garlic-chilli_2829-19613.jpg'},
		{ id: 2, name: 'pasta craziness 69', price: '10.00' ,description:'Delicious dish' ,category:'italian DISH',picture_url:'https://img.freepik.com/free-photo/zucchini-cream-soup-with-garlic-chilli_2829-19613.jpg'},
		{ id: 3, name: 'pasta craziness 100', price: '10.00',description:'Delicious dish',category:'italian DISH',picture_url:'https://img.freepik.com/free-photo/zucchini-cream-soup-with-garlic-chilli_2829-19613.jpg'},
	]

	const initialFormState = { id: null, name: '', price: '' ,description:'',category:'',picture_url:''}

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, price: user.price,description:user.description ,category:user.category,picture_url:user.picture_url})
	}

	return (
		<div className="container">
			<h1>Products Dashboard</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add user</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default App