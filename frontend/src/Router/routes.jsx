import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/mainLayout';
import ErrorPage from '../pages/error';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import AboutPage from '../pages/about';
import ServicesPage from '../pages/services';
import BlogPage from '../pages/blog';
import ContactPage from '../pages/contact';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/services', element: <ServicesPage /> },
      { path: '/blog', element: <BlogPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/login', element: <LoginPage /> },
    ],
  },
]);

export default routes;