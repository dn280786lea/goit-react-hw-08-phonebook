import React, { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../../src/redux/auth/operations';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useAuth } from 'hooks/useAuth';
import './App.css';
import { routes } from './route';

const Home = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const { register, login, home, contacts } = routes;

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path={register}
            element={
              <RestrictedRoute
                redirectTo={contacts}
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path={login}
            element={
              <RestrictedRoute
                redirectTo={contacts}
                component={<LoginPage />}
              />
            }
          />
          <Route
            path={contacts}
            element={
              <PrivateRoute redirectTo={login} component={<Contacts />} />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to={home} />} />
      </Routes>
    </>
  );
};

export default App;
