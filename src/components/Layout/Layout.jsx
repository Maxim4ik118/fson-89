import React from 'react';
import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <NavLink className="header-link" to="/">
          Home
        </NavLink>
        <NavLink className="header-link " to="/posts">
          Posts
        </NavLink>
        <NavLink className="header-link " to="/products">
          Products
        </NavLink>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
