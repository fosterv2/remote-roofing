import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav">
        <NavLink to="/" exact activeStyle={{ borderBottom: "2px solid white" }}><strong>Home</strong></NavLink>
      </div>
      <div className="nav">
        <NavLink to="/faq" activeStyle={{ borderBottom: "2px solid white" }}><strong>FAQ</strong></NavLink>
      </div>
      <div className="nav">
        <NavLink to="/services" activeStyle={{ borderBottom: "2px solid white" }}><strong>Services</strong></NavLink>
      </div>
    </div>
  );
};
    
export default NavBar