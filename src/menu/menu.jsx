import React from 'react';
import { Link } from 'react-router-dom';
import styles from './menu.module.css'; // Assuming this file is in the same directory as Menu.js

const Menu = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.navbarLink}>Todos los Pendientes</Link>
      <Link to="/IDandTitles" className={styles.navbarLink}>ID y Títulos</Link>
      <Link to="/pending" className={styles.navbarLink}>Pendientes</Link>
      <Link to="/resolved" className={styles.navbarLink}>Resueltos</Link>
      <Link to="/todoswithuserid" className={styles.navbarLink}>Todos con Usuario</Link>
      <Link to="/resolvedwithuserid" className={styles.navbarLink}>Resueltos con Usuario</Link>
      <Link to="/pendingwithuserid" className={styles.navbarLink}>Pendientes con Usuario</Link>
    </div>
  );
}

export default Menu;
