// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './menu/menu';
import TodoList from './components/TodoList';
import TodoListIDsAndTitles from './components/TodoListIDsAndTitles';
import TodoListUnresolved from './components/TodoListUnresolved';
import TodoListResolved from './components/TodoListResolved';
import TodoListWithUser from './components/TodoListWithUser';
import TodoListResolvedWithUser from './components/TodoListResolvedWithUser';
import TodoListUnresolvedWithUser from './components/TodoListUnresolvedWithUser';

const App = () => {
  return (
    <Router>
      <div>
        <Menu /> {/* Aquí se incluye el menú de navegación */}
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/IDandTitles" element={<TodoListIDsAndTitles />} />
          <Route path="/pending" element={<TodoListUnresolved />} />
          <Route path="/resolved" element={<TodoListResolved />} />
          <Route path="/todoswithuserid" element={<TodoListWithUser />} />
          <Route path="/resolvedwithuserid" element={<TodoListResolvedWithUser />} />
          <Route path="/pendingwithuserid" element={<TodoListUnresolvedWithUser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
