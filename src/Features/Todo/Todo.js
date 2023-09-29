import React, { useState , useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import {addUser , updateUser , deleteUser } from  './TodoSlice'
const Todo = () => {
    const [inpValue , setInpValue] = useState("") 
    const dispatch = useDispatch()
    const [editingUserId, setEditingUserId] = useState(null); // Track the user being edited
    const users = useSelector((state) => state.crud.users);
            
const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
  };
  const addOrUpdateTodo = (name) => {
    if (editingUserId !== null) {
      // If editing, update the existing user
      dispatch(updateUser({ id: editingUserId, name }));
      setEditingUserId(null); // Clear editing state
    } else {
      // If not editing, add a new user
      dispatch(
        addUser({
          name: name,
          email: `${name}@example.com`,
          id: Math.random().toString(16).slice(2),
        })
      );
    }
    setInpValue('');
  };
  const handleEdit = (userId) => {
    // Set the editing user and populate the input field with their name
    const userToEdit = users.find((user) => user.id === userId);
    if (userToEdit) {
      setEditingUserId(userId);
      setInpValue(userToEdit.name);
    }
  };
  return (
    <div className="max-w-xl mx-auto bg-gradient-to-r from-blue-500 to-indigo-500 p-6 rounded-lg shadow-lg text-white">
    <h1 className="text-4xl font-semibold mb-6 text-center">CRUD Example</h1>
  
    {/* Create */}
    <div className="mb-6 flex flex-col md:flex-row justify-center items-center">
      <input
        type="text"
        id="newItem"
        onChange={(e) => setInpValue(e.target.value)}
        value={inpValue}
        className="border text-black rounded-lg px-4 py-3 md:w-3/4 md:mr-4 focus:outline-none"
        placeholder="New Item"
      />
      <button
        onClick={() => {
          addOrUpdateTodo(inpValue);
        }}
        id="addItem"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg mt-4 md:mt-0 focus:outline-none transition duration-300"
      >
        {editingUserId !== null ? 'Update' : 'Add'}
      </button>
    </div>
  
    {/* Read */}
    <ul className="space-y-4">
      {users.map((user) => (
        <li
          key={user.id}
          className="bg-white bg-opacity-10 p-4 rounded-lg flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-center md:text-left">
            <strong className="text-lg text-yellow-300">Name:</strong>{' '}
            <span style={{ textTransform: 'capitalize' }}>{user.name}</span>{' '}
            <strong className="text-lg text-yellow-300">Email:</strong> {user.email}
          </div>
          <div className="mt-4 md:mt-0 flex justify-center md:justify-start">
            <button
              onClick={() => handleEdit(user.id)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full mr-2 transition duration-300 ease-in-out"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(user.id)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
  

  

  )
}

export default Todo