import Banner from '../component/banner';
import AboutUs from '../component/about';
import ServiceArea from '../component/serviceArea';
import ContactSection from '../component/contactSection';
import ProductSection from '../component/ProductSection';
import OurTeam from '../component/ourTeam';
import TeamSlider from '../component/teamSlider';
import ChooseUs from '../component/chooseUs';
import CustomerSection from '../component/customer';

const HomePage = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <ServiceArea />
      <ContactSection />
      <ProductSection />
      <OurTeam />
      <TeamSlider />
      <ChooseUs />
      <CustomerSection />
    </>
  );
};

export default HomePage;
