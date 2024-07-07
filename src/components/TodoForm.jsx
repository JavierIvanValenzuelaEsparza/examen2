import React, { useState } from 'react';
import axios from 'axios';

const TodoForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: '',
    user: '',
    created_at: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/todos/', formData);
      alert('Tarea creada exitosamente');
      setFormData({
        title: '',
        description: '',
        status: '',
        user: '',
        created_at: '',
      });
    } catch (error) {
      alert('Error al crear la tarea');
    }
  };

  return (
    <div className="todo-form">
      <h2>Crear Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título:</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />

        <label htmlFor="description">Descripción:</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />

        <label htmlFor="status">Estado:</label>
        <select id="status" name="status" value={formData.status} onChange={handleChange} required>
          <option value="">Seleccione...</option>
          <option value="pending">Pendiente</option>
          <option value="completed">Completado</option>
        </select>

        <label htmlFor="user">Usuario:</label>
        <input type="number" id="user" name="user" value={formData.user} onChange={handleChange} required />

        <label htmlFor="created_at">Fecha de Creación:</label>
        <input type="datetime-local" id="created_at" name="created_at" value={formData.created_at} onChange={handleChange} required />

        <button type="submit">Crear Tarea</button>
      </form>
    </div>
  );
};

export default TodoForm;
