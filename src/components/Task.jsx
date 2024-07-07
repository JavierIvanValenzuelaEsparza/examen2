// src/components/Task.js
import React from 'react';

const Task = ({ task, onUpdate }) => {
  const handleStatusUpdate = (status) => {
    onUpdate(task.id, status);
  };

  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>ID: {task.id}</p>
      <p>Usuario: {task.user}</p>
      <p>Estado: {task.status ? 'Resuelto' : 'Sin resolver'}</p>
      <div>
        <button onClick={() => handleStatusUpdate(!task.status)}>
          {task.status ? 'Marcar como no resuelto' : 'Marcar como resuelto'}
        </button>
      </div>
    </div>
  );
};

export default Task;
