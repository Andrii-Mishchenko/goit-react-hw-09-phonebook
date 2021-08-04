import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from './routes'
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';
import styles from '../styles/AppBar.module.css';


const Navigation = () => {
  const isLogedIn = useSelector(authSelectors.getIsAuthenticated)
  
  return (
    <nav>
      <NavLink 
        className={styles.link} 
        activeClassName={styles.activeLink} 
        to={routes.HomeView}
        exact>
        Home
      </NavLink>

      {isLogedIn && (
        <NavLink
          className={styles.link} 
          activeClassName={styles.activeLink} 
          to={routes.ContactsView}
          exact       
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
 
export default Navigation;



// const Navigation = ({ isLogedIn }) => (

// );

// const mapStateToProps = state => ({
//   isLogedIn: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(Navigation);