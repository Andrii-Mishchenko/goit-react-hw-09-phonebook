import React from 'react';

const UserMenu = ({mail, onLogout}) => (
    <div >
        <p>{mail}Здесь будет email</p>
        <button type="button" onClick={onLogout}>
            Logout
        </button>
    </div>

)
 
export default UserMenu;