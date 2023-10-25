import Footer from '../pages/footer';
import HomeNavbar from '../component/navbar';

const ErrorPage = () => {
  return (
    <div>
      <HomeNavbar />
      <div className="flex justify-center items-center ">
        <img src="/src/assets/Frame.svg" alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
