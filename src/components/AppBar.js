import React from 'react';

import Navigation from './Navigation';
import styles from '../Phonebook.module.css';
import UserMenu from './UserMenu/UserMenu';
import AuthNav from './AuthNav';


const AppBar = ({isAuthenticated}) => (
    <header className={styles.AppBar}>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
);

 
export default AppBar;