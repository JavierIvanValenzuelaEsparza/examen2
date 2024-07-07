
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TodoListIDs = () => {
    const [todoIDs, setTodoIDs] = useState([]);

    useEffect(() => {
        const fetchTodoIDs = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/todos/ids/');
                setTodoIDs(response.data);
            } catch (error) {
                console.error('Error fetching todo IDs:', error);
            }
        };

        fetchTodoIDs();
    }, []);

    return (
        <div className="todo-list">
            <h2>Lista de Todos los Pendientes (solo IDs)</h2>
            <ul>
                {todoIDs.map(todoID => (
                    <li key={todoID}>{todoID}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoListIDs;
