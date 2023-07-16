import React from 'react';
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.logo}>
        <span className="fa fa-tasks" />
        </a>
      <ul className={styles.navlist}>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.linkActive : styles.navLink)}>Home</NavLink>
        <NavLink to="/favorite" className={({ isActive }) => (isActive ? styles.linkActive : styles.navLink)}>Favorite</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? styles.linkActive : styles.navLink)}>About</NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
