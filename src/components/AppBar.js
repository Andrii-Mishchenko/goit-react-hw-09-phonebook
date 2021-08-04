import React from 'react';

import Navigation from './Navigation';
import styles from '../styles/AppBar.module.css';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

const AppBar = () => {
    const isLogedIn = useSelector(authSelectors.getIsAuthenticated)
    return (
        <header className={styles.header}>
            <Navigation />
            {isLogedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
}
 
export default AppBar;


// const AppBar = ({isAuthenticated}) => (
//     <header className={styles.header}>
//         <Navigation />
//         {isAuthenticated ? <UserMenu /> : <AuthNav />}
//     </header>
// );

// const mapStateToProps = (state) => ({
//     isAuthenticated: authSelectors.getIsAuthenticated(state)
// })
 
// export default connect(mapStateToProps)(AppBar);