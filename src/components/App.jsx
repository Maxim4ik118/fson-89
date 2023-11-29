import { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Layout from './Layout/Layout';
import Loader from './Loader/Loader';

import { refreshThunk } from 'redux/auth/auth.reducer';

import * as ROUTES from 'constants/routes.js';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const PostDetails = lazy(() => import('pages/PostDetails'));
const PostsPage = lazy(() => import('pages/PostsPage'));
const ProductsPage = lazy(() => import('pages/ProductsPage'));
const Login = lazy(() => import('pages/LoginPage'));
const Register = lazy(() => import('pages/RegisterPage'));
const Contacts = lazy(() => import('pages/ContactsPage'));

const appRoutes = [
  {
    path: ROUTES.HOME_ROUTE,
    element: <HomePage />,
  },
  {
    path: ROUTES.LOGIN_ROUTE,
    element: (
      <RestrictedRoute navigateTo={ROUTES.CONTACTS_ROUTE}>
        <Login />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.REGISTER_ROUTE,
    element: (
      <RestrictedRoute navigateTo={ROUTES.POSTS_ROUTE}>
        <Register />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.CONTACTS_ROUTE,
    element: (
      <PrivateRoute>
        <Contacts />
      </PrivateRoute>
    ),
  },
  {
    path: ROUTES.PRODUCTS_ROUTE,
    element: (
      <PrivateRoute>
        <ProductsPage />
      </PrivateRoute>
    ),
  },
  {
    path: ROUTES.POSTS_ROUTE,
    element: (
      <PrivateRoute>
        <PostsPage />
      </PrivateRoute>
    ),
  },
  {
    path: ROUTES.POST_DETAILS_ROUTE,
    element: (
      <PrivateRoute>
        <PostDetails />
      </PrivateRoute>
    ),
  },
];

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
