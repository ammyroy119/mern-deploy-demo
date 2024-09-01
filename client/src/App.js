import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await axios.get('http://localhost:8000/api/todos');
    setTodos(res.data);
  };

  const addTodo = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8000/api/todos', { text: newTodo });
    setNewTodo('');
    fetchTodos();
  };

  return (
    <div>
      <h1>MERN Todo App</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;