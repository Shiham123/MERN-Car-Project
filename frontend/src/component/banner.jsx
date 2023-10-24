import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const Banner = () => {
  return (
    <div className="mx-[1rem]">
      <div className="carousel w-full rounded-lg overflow-y-hidden">
        <div id="slide1" className="carousel-item relative w-full h-[700px]">
          <img
            src="https://raw.githubusercontent.com/Shiham123/Img_for_All/master/car-project/banner/1.jpg"
            width="100px"
            className="w-full object-cover"
          />

          <div className="absolute w-full p-[10rem] top-0 left-0 bg-gradient-to-tr from-[#151515] to-[#15151500]">
            <h1 className="text-white text-[60px] font-bold leading-[75px] font-inter">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p className="text-white text-[18px] font-normal leading-[30px] font-inter capitalize py-[3rem]">
              There are many variations of passages of available, but <br />
              the majority have suffered alteration in some form
            </p>
            <div className="flex justify-start items-center gap-8">
              <button className="bg-transparent border-[1px] border-[#ffffff75] hover:bg-fontColor hover:border-fontColor px-[22px] py-[15px] text-white font-inter rounded-lg text-[18px] font-semibold duration-500">
                Discover More
              </button>
              <button className="bg-transparent border-[1px] border-[#ffffff75] hover:bg-fontColor hover:border-fontColor px-[22px] py-[15px] text-white font-inter rounded-lg text-[18px] font-semibold duration-500">
                Latest Project
              </button>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 right-32 bottom-10 gap-8">
            <a
              href="#slide4"
              className="p-[16px] rounded-full bg-[#ffffff33] outline-none hover:bg-fontColor duration-300"
            >
              <AiOutlineArrowLeft size={30} color="#ffffff" />
            </a>
            <a
              href="#slide2"
              className="p-[16px] rounded-full bg-[#ffffff33] outline-none hover:bg-fontColor duration-300"
            >
              <AiOutlineArrowRight size={30} color="#ffffff" />
            </a>
          </div>
        </div>
        {/* slide  */}
        <div id="slide2" className="carousel-item relative w-full h-[700px]">
          <img
            src="https://raw.githubusercontent.com/Shiham123/Img_for_All/master/car-project/banner/2.jpg"
            width="100px"
            className="w-full object-cover"
          />

          <div className="absolute w-full p-[10rem] top-0 left-0 bg-gradient-to-tr from-[#151515] to-[#15151500]">
            <h1 className="text-white text-[60px] font-bold leading-[75px] font-inter">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p className="text-white text-[18px] font-normal leading-[30px] font-inter capitalize py-[3rem]">
              There are many variations of passages of available, but <br />
              the majority have suffered alteration in some form
            </p>
            <div className="flex justify-start items-center gap-8">
              <button className="bg-transparent border-[1px] border-[#ffffff75] hover:bg-fontColor hover:border-fontColor px-[22px] py-[15px] text-white font-inter rounded-lg text-[18px] font-semibold duration-500">
                Discover More
              </button>
              <button className="bg-transparent border-[1px] border-[#ffffff75] hover:bg-fontColor hover:border-fontColor px-[22px] py-[15px] text-white font-inter rounded-lg text-[18px] font-semibold duration-500">
                Latest Project
              </button>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 right-32 bottom-10 gap-8">
            <a
              href="#slide1"
              className="p-[16px] rounded-full bg-[#ffffff33] outline-none hover:bg-fontColor duration-300"
            >
              <AiOutlineArrowLeft size={30} color="#ffffff" />
            </a>
            <a
              href="#slide3"
              className="p-[16px] rounded-full bg-[#ffffff33] outline-none hover:bg-fontColor duration-300"
            >
              <AiOutlineArrowRight size={30} color="#ffffff" />
            </a>
          </div>
        </div>

        {/* slide */}
        <div id="slide3" className="carousel-item relative w-full h-[700px]">
          <img
            src="https://raw.githubusercontent.com/Shiham123/Img_for_All/master/car-project/banner/3.jpg"
            width="100px"
            className="w-full object-cover"
          />

          <div className="absolute w-full p-[10rem] top-0 left-0 bg-gradient-to-tr from-[#151515] to-[#15151500]">
            <h1 className="text-white text-[60px] font-bold leading-[75px] font-inter">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p className="text-white text-[18px] font-normal leading-[30px] font-inter capitalize py-[3rem]">
              There are many variations of passages of available, but <br />
              the majority have suffered alteration in some form
            </p>
            <div className="flex justify-start items-center gap-8">
              <button className="bg-transparent border-[1px] border-[#ffffff75] hover:bg-fontColor hover:border-fontColor px-[22px] py-[15px] text-white font-inter rounded-lg text-[18px] font-semibold duration-500">
                Discover More
              </button>
              <button className="bg-transparent border-[1px] border-[#ffffff75] hover:bg-fontColor hover:border-fontColor px-[22px] py-[15px] text-white font-inter rounded-lg text-[18px] font-semibold duration-500">
                Latest Project
              </button>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 right-32 bottom-10 gap-8">
            <a
              href="#slide2"
              className="p-[16px] rounded-full bg-[#ffffff33] outline-none hover:bg-fontColor duration-300"
            >
              <AiOutlineArrowLeft size={30} color="#ffffff" />
            </a>
            <a
              href="#slide4"
              className="p-[16px] rounded-full bg-[#ffffff33] outline-none hover:bg-fontColor duration-300"
            >
              <AiOutlineArrowRight size={30} color="#ffffff" />
            </a>
          </div>
        </div>
        {/* slide */}
        <div id="slide4" className="carousel-item relative w-full h-[700px]">
          <img
            src="https://raw.githubusercontent.com/Shiham123/Img_for_All/master/car-project/banner/4.jpg"
            width="100px"
            className="w-full object-cover"
          />

          <div className="absolute w-full p-[10rem] top-0 left-0 bg-gradient-to-tr from-[#151515] to-[#15151500]">
            <h1 className="text-white text-[60px] font-bold leading-[75px] font-inter">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p className="text-white text-[18px] font-normal leading-[30px] font-inter capitalize py-[3rem]">
              There are many variations of passages of available, but <br />
              the majority have suffered alteration in some form
            </p>
            <div className="flex justify-start items-center gap-8">
              <button className="bg-transparent border-[1px] border-[#ffffff75] hover:bg-fontColor hover:border-fontColor px-[22px] py-[15px] text-white font-inter rounded-lg text-[18px] font-semibold duration-500">
                Discover More
              </button>
              <button className="bg-transparent border-[1px] border-[#ffffff75] hover:bg-fontColor hover:border-fontColor px-[22px] py-[15px] text-white font-inter rounded-lg text-[18px] font-semibold duration-500">
                Latest Project
              </button>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 right-32 bottom-10 gap-8">
            <a
              href="#slide3"
              className="p-[16px] rounded-full bg-[#ffffff33] outline-none hover:bg-fontColor duration-300"
            >
              <AiOutlineArrowLeft size={30} color="#ffffff" />
            </a>
            <a
              href="#slide1"
              className="p-[16px] rounded-full bg-[#ffffff33] outline-none hover:bg-fontColor duration-300"
            >
              <AiOutlineArrowRight size={30} color="#ffffff" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
