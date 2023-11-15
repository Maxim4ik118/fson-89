import React from 'react';
import { NavLink } from 'react-router-dom';

import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <NavLink
          className={({ isActive }) =>
            `${css.headerLink} ${isActive ? css.active : ''}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${css.headerLink} ${isActive ? css.active : ''}`
          }
          to="/posts"
        >
          Posts
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${css.headerLink} ${isActive ? css.active : ''}`
          }
          to="/products"
        >
          Products
        </NavLink>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
