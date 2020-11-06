import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div>
        <NavLink to="/" exact>Home</NavLink>
      </div>
      <div>
        <NavLink to="/faq">FAQ</NavLink>
      </div>
      <div>
        <NavLink to="/services">Services</NavLink>
      </div>
    </div>
  );
};
    
export default NavBar