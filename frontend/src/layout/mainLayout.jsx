import Navbar from '../component/navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="max-w-[1620px] mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
