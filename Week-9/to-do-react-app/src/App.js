import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);

	return (
		
			<div className='container-main'>
				<header className='header'>
					<h1>To Do App</h1>
				</header>
				<Form
					todos={todos}
					setTodos={setTodos}
					setInputText={setInputText} inputText={inputText} />
				<TodoList
					setTodos={setTodos}
					todos={todos} />
			</div>
		
	)
}

export default App;
