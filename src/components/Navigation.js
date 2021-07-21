import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from './routes'
import styles from '../Phonebook.module.css';



const Navigation = () => {
    return (
        <nav className={styles.Navigation}>
            <ul className={styles.NavigationList}>
                <li><NavLink exact to={routes.HomeView}>Home</NavLink></li>
                <li><NavLink to={routes.ContactsView} >Contacts</NavLink></li>
            </ul>
        </nav>
     );
}
 
export default Navigation;