import React from 'react';
import { NavLink } from 'react-router-dom';

import css from './Layout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthenticated, selectUserData } from 'redux/auth/auth.selectors';
import { logOutThunk } from 'redux/auth/auth.reducer';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthenticated);
  const userData = useSelector(selectUserData);

  const onLogOut = () => {
    dispatch(logOutThunk());
  }

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
        {authenticated ? (
          <>
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
            <NavLink
              className={({ isActive }) =>
                `${css.headerLink} ${isActive ? css.active : ''}`
              }
              to="/contacts"
            >
              Contacts
            </NavLink>

            <div>
              <span>Hello, {userData.name}!</span>{' '}
              <button onClick={onLogOut}>Log Out</button>
            </div>
          </>
        ) : (
          <>
            <NavLink
              className={({ isActive }) =>
                `${css.headerLink} ${isActive ? css.active : ''}`
              }
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${css.headerLink} ${isActive ? css.active : ''}`
              }
              to="/register"
            >
              Register
            </NavLink>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
