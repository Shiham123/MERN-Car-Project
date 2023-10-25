import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from 'react-icons/ai';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './teamSlider.css';

const TeamSlider = () => {
  return (
    <div className="my-[10rem] sliderCustom">
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={{
          prevEl: '.custom-navigation-prev',
          nextEl: '.custom-navigation-next',
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('next slide')}
      >
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center border-2 border-[#E8E8E8] py-8">
            <img
              src="https://raw.githubusercontent.com/Shiham123/Img_for_All/master/car-project/team/1.jpg"
              width="300px"
              className="rounded-lg object-cover w-4/6"
              alt=""
            />
            <div>
              <h1 className="font-inter text-[25px] font-bold text-[#444] py-4 text-center dark:text-white">
                Car Engine Plug
              </h1>
              <p className="text-[#737373] text-[20px] font-semibold font-inter text-center py-4">
                Engine Expert
              </p>
            </div>
            <div className="flex justify-center items-center gap-8">
              <AiFillFacebook
                size={30}
                className="text-fontColor cursor-pointer hover:text-black duration-500"
              />
              <AiFillInstagram
                size={30}
                className="text-fontColor  cursor-pointer hover:text-black duration-500"
              />
              <AiFillTwitterCircle
                size={30}
                className="text-fontColor  cursor-pointer hover:text-black duration-500"
              />
              <AiFillYoutube
                size={30}
                className="text-fontColor  cursor-pointer hover:text-black duration-500"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center border-2 border-[#E8E8E8] py-8">
            <img
              src="https://raw.githubusercontent.com/Shiham123/Img_for_All/master/car-project/team/2.jpg"
              width="300px"
              className="rounded-lg object-cover w-4/6"
              alt=""
            />
            <div>
              <h1 className="font-inter text-[25px] font-bold text-[#444] py-4 text-center dark:text-white">
                Car Engine Plug
              </h1>
              <p className="text-[#737373] text-[20px] font-semibold font-inter text-center py-4">
                Engine Expert
              </p>
            </div>
            <div className="flex justify-center items-center gap-8">
              <AiFillFacebook
                size={30}
                className="text-fontColor cursor-pointer hover:text-black duration-500"
              />
              <AiFillInstagram
                size={30}
                className="text-fontColor  cursor-pointer hover:text-black duration-500"
              />
              <AiFillTwitterCircle
                size={30}
                className="text-fontColor  cursor-pointer hover:text-black duration-500"
              />
              <AiFillYoutube
                size={30}
                className="text-fontColor  cursor-pointer hover:text-black duration-500"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center border-2 border-[#E8E8E8] py-8">
            <img
              src="https://raw.githubusercontent.com/Shiham123/Img_for_All/master/car-project/team/3.jpg"
              width="300px"
              className="rounded-lg object-cover w-4/6"
              alt=""
            />
            <div>
              <h1 className="font-inter text-[25px] font-bold text-[#444] py-4 text-center dark:text-white">
                Car Engine Plug
              </h1>
              <p className="text-[#737373] text-[20px] font-semibold font-inter text-center py-4">
                Engine Expert
              </p>
            </div>
            <div className="flex justify-center items-center gap-8">
              <AiFillFacebook
                size={30}
                className="text-fontColor cursor-pointer hover:text-black duration-500"
              />
              <AiFillInstagram
                size={30}
                className="text-fontColor  cursor-pointer hover:text-black duration-500"
              />
              <AiFillTwitterCircle
                size={30}
                className="text-fontColor  cursor-pointer hover:text-black duration-500"
              />
              <AiFillYoutube
                size={30}
                className="text-fontColor  cursor-pointer hover:text-black duration-500"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center border-2 border-[#E8E8E8] py-8">
            <img
              src="https://raw.githubusercontent.com/Shiham123/Img_for_All/master/car-project/team/1.jpg"
              width="300px"
              className="rounded-lg object-cover w-4/6"
              alt=""
            />
            <div>
              <h1 className="font-inter text-[25px] font-bold text-[#444] py-4 text-center dark:text-white">
                Car Engine Plug
              </h1>
              <p className="text-[#737373] text-[20px] font-semibold font-inter text-center py-4">
                Engine Expert
              </p>
            </div>
            <div className="flex justify-center items-center gap-8">
              <AiFillFacebook
                size={30}
                className="text-fontColor cursor-pointer hover:text-black duration-500"
              />
              <AiFillInstagram
                size={30}
                className="text-fontColor  cursor-pointer hover:text-black duration-500"
              />
              <AiFillTwitterCircle
                size={30}
                className="text-fontColor  cursor-pointer hover:text-black duration-500"
              />
              <AiFillYoutube
                size={30}
                className="text-fontColor  cursor-pointer hover:text-black duration-500"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center border-2 border-[#E8E8E8] py-8">
            <img
              src="https://raw.githubusercontent.com/Shiham123/Img_for_All/master/car-project/team/2.jpg"
              width="300px"
              className="rounded-lg object-cover w-4/6"
              alt=""
            />
            <div>
              <h1 className="font-inter text-[25px] font-bold text-[#444] py-4 text-center dark:text-white">
                Car Engine Plug
              </h1>
              <p className="text-[#737373] text-[20px] font-semibold font-inter text-center py-4">
                Engine Expert
              </p>
            </div>
            <div className="flex justify-center items-center gap-8">
              <AiFillFacebook
                size={30}
                className="text-fontColor cursor-pointer hover:text-black duration-500"
              />
              <AiFillInstagram
                size={30}
                className="text-fontColor  cursor-pointer hover:text-black duration-500"
              />
              <AiFillTwitterCircle
                size={30}
                className="text-fontColor  cursor-pointer hover:text-black duration-500"
              />
              <AiFillYoutube
                size={30}
                className="text-fontColor  cursor-pointer hover:text-black duration-500"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center border-2 border-[#E8E8E8] py-8">
            <img
              src="https://raw.githubusercontent.com/Shiham123/Img_for_All/master/car-project/team/3.jpg"
              width="300px"
              className="rounded-lg object-cover w-4/6"
              alt=""
            />
            <div>
              <h1 className="font-inter text-[25px] font-bold text-[#444] py-4 text-center dark:text-white">
                Car Engine Plug
              </h1>
              <p className="text-[#737373] text-[20px] font-semibold font-inter text-center py-4">
                Engine Expert
              </p>
            </div>
            <div className="flex justify-center items-center gap-8">
              <AiFillFacebook
                size={30}
                className="text-fontColor cursor-pointer hover:text-black duration-500"
              />
              <AiFillInstagram
                size={30}
                className="text-fontColor  cursor-pointer hover:text-black duration-500"
              />
              <AiFillTwitterCircle
                size={30}
                className="text-fontColor  cursor-pointer hover:text-black duration-500"
              />
              <AiFillYoutube
                size={30}
                className="text-fontColor  cursor-pointer hover:text-black duration-500"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="custom-navigation-prev">
        <AiOutlineArrowLeft
          size={70}
          className="bg-white text-black p-4 rounded-full dark:text-fontColor hover:bg-fontColor  hover:dark:text-white duration-500"
        />
      </div>
      <div className="custom-navigation-next">
        <AiOutlineArrowRight
          size={70}
          className="bg-white text-black p-4 rounded-full dark:text-fontColor hover:bg-fontColor  hover:dark:text-white duration-500"
        />
      </div>
    </div>
  );
};

export default TeamSlider;
