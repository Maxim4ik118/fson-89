import { LOGIN_ROUTE } from 'constants/routes';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthenticated } from 'redux/auth/auth.selectors';

const PrivateRoute = ({ children, navigateTo = LOGIN_ROUTE }) => {
  const authenticated = useSelector(selectAuthenticated);

  return authenticated ? children : <Navigate to={navigateTo} replace />;
};

export default PrivateRoute;
