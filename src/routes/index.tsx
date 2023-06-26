import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loading } from '../components/Loading';

const LoginPage = lazy(() => import('../pages/Auth/LoginPage'));
const RegisterPage = lazy(() => import('../pages/Auth/RegisterPage'));

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Suspense fallback={<Loading />}>
            <LoginPage />
          </Suspense>
        }
      ></Route>
      <Route
        path="/register"
        element={
          <Suspense fallback={<Loading />}>
            <RegisterPage />
          </Suspense>
        }
      ></Route>
    </Routes>
  );
}

export default AppRoutes;
