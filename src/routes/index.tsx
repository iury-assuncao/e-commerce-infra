import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loading } from '../components/Loading';
import ProductDetails from '../pages/Products/ProductDetails';

const LoginPage = lazy(() => import('../pages/Auth/LoginPage'));
const RegisterPage = lazy(() => import('../pages/Auth/RegisterPage'));
const Products = lazy(() => import('../pages/Products/Products'));
const Cart = lazy(() => import('../pages/Products/Cart'));

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
        path="/cadastro-usuario"
        element={
          <Suspense fallback={<Loading />}>
            <RegisterPage />
          </Suspense>
        }
      ></Route>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading />}>
            <Products />
          </Suspense>
        }
      ></Route>
      <Route
        path="/produto/:id"
        element={
          <Suspense fallback={<Loading />}>
            <ProductDetails />
          </Suspense>
        }
      ></Route>
      <Route
        path="/carrinho"
        element={
          <Suspense fallback={<Loading />}>
            <Cart />
          </Suspense>
        }
      ></Route>
    </Routes>
  );
}

export default AppRoutes;
