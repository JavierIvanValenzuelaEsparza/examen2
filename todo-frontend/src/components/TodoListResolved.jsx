// components/TodoListResolved.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TodoListResolved = () => {
    const [resolvedTodos, setResolvedTodos] = useState([]);

    useEffect(() => {
        const fetchResolvedTodos = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/todos/resolved/');
                setResolvedTodos(response.data);
            } catch (error) {
                console.error('Error fetching resolved todos:', error);
            }
        };

        fetchResolvedTodos();
    }, []);

    return (
        <div className="todo-list">
            <h2>Lista de Pendientes Resueltos (ID y Título)</h2>
            <ul>
                {resolvedTodos.map(todo => (
                    <li key={todo.id}>
                        {todo.id} - {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoListResolved;
