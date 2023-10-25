import Navbar from '../component/navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/footer';

const MainLayout = () => {
  return (
    <div className="max-w-[1620px] mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
