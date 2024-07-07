// components/TodoListUnresolved.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TodoListUnresolved = () => {
    const [unresolvedTodos, setUnresolvedTodos] = useState([]);

    useEffect(() => {
        const fetchUnresolvedTodos = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/todos/unresolved/');
                setUnresolvedTodos(response.data);
            } catch (error) {
                console.error('Error fetching unresolved todos:', error);
            }
        };

        fetchUnresolvedTodos();
    }, []);

    return (
        <div className="todo-list">
            <h2>Lista de Pendientes sin Resolver (ID y Título)</h2>
            <ul>
                {unresolvedTodos.map(todo => (
                    <li key={todo.id}>
                        {todo.id} - {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoListUnresolved;
