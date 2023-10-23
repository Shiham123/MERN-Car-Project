import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/mainLayout';
import ErrorPage from '../pages/error';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/login', element: <LoginPage /> },
    ],
  },
]);

export default routes;
