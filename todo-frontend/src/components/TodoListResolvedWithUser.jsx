// components/TodoListResolvedWithUser.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TodoListResolvedWithUser = () => {
    const [resolvedTodosWithUser, setResolvedTodosWithUser] = useState([]);

    useEffect(() => {
        const fetchResolvedTodosWithUser = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/todos/resolved-with-user/');
                setResolvedTodosWithUser(response.data);
            } catch (error) {
                console.error('Error fetching resolved todos with user:', error);
            }
        };

        fetchResolvedTodosWithUser();
    }, []);

    return (
        <div className="todo-list">
            <h2>Lista de Pendientes Resueltos (ID y ID de Usuario)</h2>
            <ul>
                {resolvedTodosWithUser.map(todo => (
                    <li key={todo.id}>
                        {todo.id} - Usuario: {todo.user}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoListResolvedWithUser;
