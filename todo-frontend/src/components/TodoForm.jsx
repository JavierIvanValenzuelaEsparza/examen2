import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: '',
    user: '',
    created_at: '',
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/users/');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

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
    <div className="todo-form" style={styles.formContainer}>
      <h2 style={styles.heading}>Crear Nueva Tarea</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="title" style={styles.label}>Título:</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required style={styles.input} />

        <label htmlFor="description" style={styles.label}>Descripción:</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange} required style={styles.textarea} />

        <label htmlFor="status" style={styles.label}>Estado:</label>
        <select id="status" name="status" value={formData.status} onChange={handleChange} required style={styles.select}>
          <option value="">Seleccione...</option>
          <option value="pending">Pendiente</option>
          <option value="completed">Completado</option>
        </select>

        <label htmlFor="user" style={styles.label}>Usuario:</label>
        <select id="user" name="user" value={formData.user} onChange={handleChange} required style={styles.select}>
          <option value="">Seleccione un usuario...</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.username}</option>
          ))}
        </select>

        <label htmlFor="created_at" style={styles.label}>Fecha de Creación:</label>
        <input type="datetime-local" id="created_at" name="created_at" value={formData.created_at} onChange={handleChange} required style={styles.input} />

        <button type="submit" style={styles.button}>Crear Tarea</button>
      </form>
    </div>
  );
};

const styles = {
  formContainer: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  textarea: {
    marginBottom: '15px',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    resize: 'vertical',
  },
  select: {
    marginBottom: '15px',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    padding: '10px 15px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#28a745',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#218838',
  },
};

export default TodoForm;
