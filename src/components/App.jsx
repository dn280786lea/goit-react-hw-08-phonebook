import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

/* import { RestrictedRoute } from './RestrictedRoute'; */
import './App.css';

const Home = lazy(() => import('../pages/Home'));
/* const RegisterPage = lazy(() => import('../pages/Register')); */

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
