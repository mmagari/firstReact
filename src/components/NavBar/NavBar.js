import React from 'react';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.logo}>
        <span className="fa fa-tasks" />
        </a>
      <ul className={styles.navlist}>
        <li>
          <a href="/" className={styles.navlink}>Home</a>
        </li>
        <li>
          <a href="/favorite" className={styles.navlink}>Favorite</a>
        </li>
        <li>
          <a href="/about" className={styles.navlink}>About</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
