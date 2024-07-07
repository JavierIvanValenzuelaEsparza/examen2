// components/TodoListUnresolvedWithUser.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TodoListUnresolvedWithUser = () => {
    const [unresolvedTodosWithUser, setUnresolvedTodosWithUser] = useState([]);

    useEffect(() => {
        const fetchUnresolvedTodosWithUser = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/todos/unresolved/ids-and-user/');
                setUnresolvedTodosWithUser(response.data);
            } catch (error) {
                console.error('Error fetching unresolved todos with user:', error);
            }
        };

        fetchUnresolvedTodosWithUser();
    }, []);

    return (
        <div className="todo-list">
            <h2>Lista de Pendientes sin Resolver (ID y ID de Usuario)</h2>
            <ul>
                {unresolvedTodosWithUser.map(todo => (
                    <li key={todo.id}>
                        {todo.id} - Usuario: {todo.user}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoListUnresolvedWithUser;
