// components/TodoListIDsAndTitles.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TodoListIDsAndTitles = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/todos/ids-and-titles/');
                setTodos(response.data);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        fetchTodos();
    }, []);

    return (
        <div className="todo-list">
            <h2>Lista de Todos los Pendientes (IDs y Títulos)</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.id} - {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoListIDsAndTitles;
