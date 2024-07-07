import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/todos/');
      setTodos(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const renderTodos = () => {
    if (error) {
      return <div>Error fetching todos: {error}</div>;
    }

    return (
      <div className="todo-list">
        <h2>Lista de Todos los Pendientes</h2>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.id}</li>
          ))}
        </ul>
      </div>
    );
  };

  return <div>{renderTodos()}</div>;
};

export default TodoList;
