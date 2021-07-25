import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from '../../styles/UserMenu.module.css'


const UserMenu = ({ email, onLogout }) => (
    <div className={styles.container}>
        <p className={styles.email}>{email}</p>
        <button className={styles.button} type="button" onClick={onLogout}>
            Logout
        </button>
    </div>

);

const mapStateToProps = (state) => ({
    email: authSelectors.getUsermail(state)
});

const mapDispatchToProps = {
    onLogout: authOperations.logOut,
};
 
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
//zxc zxc@ukr.net
//Andrii Mishenko andriiasd123@gmail.com Fylhtq2021
//Anna Mishchenko anechka@gmail.com Fyz1990