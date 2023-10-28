import { useEffect, useState } from 'react';
import PerCard from './percard';

const ServiceArea = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then((response) => response.json())
      .then((data) => setServicesData(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-center items-center flex-col">
        <h6 className="text-fontColor text-[20px] font-bold font-inter my-8">
          Service
        </h6>
        <h1 className="text-fontDark font-bold text-[45px] font-inter dark:text-white">
          Our Service Area
        </h1>
        <p className="text-fontTransparent text-[16px] capitalize leading-[30px] text-center w-1/2 my-4 font-inter dark:text-[#ffffff8c]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{' '}
        </p>
      </div>

      {/* card section */}
      <div className="flex justify-center items-center flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-6">
        {servicesData.map((item, index) => {
          return <PerCard card={item} key={index} />;
        })}
      </div>

      <button className="border-2 rounded-lg border-fontColor bg-fontColor mx-4 px-8 py-4 font-inter text-white font-bold text-[18px] hover:bg-white hover:text-fontColor duration-150 dark:border-none my-10">
        More Services
      </button>
    </div>
  );
};

export default ServiceArea;
