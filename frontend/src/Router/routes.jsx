import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/mainLayout';
import ErrorPage from '../pages/error';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import AboutPage from '../pages/about';
import ServicesPage from '../pages/services';
import BlogPage from '../pages/blog';
import ContactPage from '../pages/contact';
import CardDetails from '../pages/cardDetails';
import RegisterPage from '../pages/register';
import CheckOut from '../component/checkOut';
import BookingPage from '../component/booking';
import PrivateRoute from './privateRoute';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      {
        path: '/about',
        element: (
          <PrivateRoute>
            <AboutPage />
          </PrivateRoute>
        ),
      },
      {
        path: '/services',
        element: (
          <PrivateRoute>
            <ServicesPage />
          </PrivateRoute>
        ),
      },
      {
        path: '/blog',
        element: (
          <PrivateRoute>
            <BlogPage />
          </PrivateRoute>
        ),
      },
      {
        path: '/contact',
        element: (
          <PrivateRoute>
            <ContactPage />
          </PrivateRoute>
        ),
      },
      { path: '/login', element: <LoginPage /> },
      {
        path: '/cardDetails/:id',
        element: (
          <PrivateRoute>
            <CardDetails />
          </PrivateRoute>
        ),
      },
      { path: '/register', element: <RegisterPage /> },
      {
        path: '/checkOut/:id',
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: '/booking',
        element: (
          <PrivateRoute>
            <BookingPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
