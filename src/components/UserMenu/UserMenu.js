import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';


const UserMenu = ({ email, onLogout }) => (
    <div >
        <p>{email}</p>
        <button type="button" onClick={onLogout}>
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