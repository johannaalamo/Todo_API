import React, { useState, useEffect } from 'react';
import { getTodos, updateTodos } from '../../services/users';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [apiTodos, setApiTodos] = useState([]);

  useEffect(() => {
    getTodos()
      .then((data) => setApiTodos(data))
      .catch((error) => console.error(error));
  }, []);

  const handleTaskChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
	if (inputValue !== "") {
	  const newTodo = { label: inputValue, done: false };
	  const newTodos = [...todos, newTodo];
	  setTodos(newTodos);
  
	  updateTodos(newTodos)
		.then((data) => console.log(data))
		.catch((error) => console.error(error));
	}
  };

  const handleDeleteTodo = (index) => {
	const newTodos = todos.filter((_, i) => i !== index);
	setTodos(newTodos);
  
	updateTodos(newTodos)
	  .then((data) => console.log(data))
	  .catch((error) => console.error(error));
  };
  

	return (
	  <div className="container col-12 col-md-6">
		<h1 className="text-center mt-5">todos!</h1>
		<ul>
			<li>
				<input
				type="text"
				value={inputValue}
				placeholder="Add a new task"
				onChange={handleTaskChange}
				/>
				 <i className="fa-solid fa-check icon" onClick={handleAddTodo}></i>
				</li>
				{todos.map((todo, index) => (
  				<li key={index}>
   				 {todo.label}
					<i
					className="fas fa-trash-alt delete-icon"
					onClick={() => handleDeleteTodo(index)}
					></i>
				</li>
				))}
		<div>{todos.length} tasks</div>
		</ul>
		  </div>
	  
	);
  };
  
  export default Home;