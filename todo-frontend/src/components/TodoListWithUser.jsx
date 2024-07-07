// components/TodoListWithUser.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TodoListWithUser = () => {
    const [todosWithUser, setTodosWithUser] = useState([]);

    useEffect(() => {
        const fetchTodosWithUser = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/todos/with-user/');
                setTodosWithUser(response.data);
            } catch (error) {
                console.error('Error fetching todos with user:', error);
            }
        };

        fetchTodosWithUser();
    }, []);

    return (
        <div className="todo-list">
            <h2>Lista de Todos los Pendientes (IDs y ID de Usuario)</h2>
            <ul>
                {todosWithUser.map(todo => (
                    <li key={todo.id}>
                        {todo.id} - Usuario: {todo.user}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoListWithUser;
