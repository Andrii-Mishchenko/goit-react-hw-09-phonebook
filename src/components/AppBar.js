import React from 'react';

import Navigation from './Navigation';
import styles from '../Phonebook.module.css';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';


const AppBar = ({isAuthenticated}) => (
    <header className={styles.AppBar}>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
);

const mapStateToProps = (state) => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state)
})
 
export default connect(mapStateToProps)(AppBar);