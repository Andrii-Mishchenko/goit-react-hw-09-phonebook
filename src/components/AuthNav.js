import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from './routes';


const AuthNav = () => (
  <div>
    <NavLink
      to={routes.RegisterView}
      exact

    >
      Registration
    </NavLink>
    <NavLink
      to={routes.LoginView}
      exact 
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;