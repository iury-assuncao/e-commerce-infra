import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AppRoutes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './contexts/Appcontext';

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer className="toast" autoClose={3500} />
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}
export default App;
