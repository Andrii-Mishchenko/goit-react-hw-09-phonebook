import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from './routes';
import styles from '../styles/AppBar.module.css';

const AuthNav = () => (
  <div>
    <NavLink
      className={styles.link} 
      activeClassName={styles.activeLink} 
      to={routes.RegisterView}
      exact

    >
      Registration
    </NavLink>
    <NavLink
      className={styles.link} 
      activeClassName={styles.activeLink} 
      to={routes.LoginView}
      exact 
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;