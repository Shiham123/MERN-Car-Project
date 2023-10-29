import { useContext } from 'react';
import { AppContext } from '../context/context';
import { Spinner } from '@material-tailwind/react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const context = useContext(AppContext);
  const location = useLocation();

  const { user, loading } = context;

  if (loading) {
    return <Spinner />;
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/register" state={location.pathname} replace />;
};

export default PrivateRoute;
