import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const CustomerSection = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [slidesData, setSlidesData] = useState([]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 992) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    fetch('/client.json')
      .then((response) => response.json())
      .then((data) => setSlidesData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slidesData.map((item, index) => {
          const { title, img, description, name } = item;
          return (
            <SwiperSlide key={index}>
              <div className="border-2 border-[#F3F3F3] rounded-lg my-8 w-full py-4 px-8">
                <div className="flex justify-start items-start gap-8">
                  <img src={img} alt="" />

                  <div>
                    <h1 className="text-[#444] font-inter text-[25px] font-bold capitalize">
                      {name}
                    </h1>
                    <h1 className="text-[#737373] font-inter text-[20px] font-semibold pb-4">
                      {title}
                    </h1>
                  </div>
                  <div className="px-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                    >
                      <path
                        d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z"
                        fill="#FF3811"
                        fill-opacity="0.2"
                      />
                      <path
                        d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z"
                        fill="#FF3811"
                        fill-opacity="0.2"
                      />
                    </svg>
                  </div>
                </div>
                <h1 className="text-[#737373] text-[16px] leading-[30px] w-full pt-4 capitalize">
                  {description}
                </h1>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CustomerSection;
