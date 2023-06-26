import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AppRoutes from './routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer className="toast" autoClose={3500} />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}
export default App;
