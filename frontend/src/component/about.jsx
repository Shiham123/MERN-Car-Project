const AboutUs = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-8 md:flex md:flex-row md:justify-center md:items-center lg:flex lg:justify-center lg:items-center lg:flex-row my-[10rem]">
      <div>
        <div className="relative px-[2rem]">
          <img
            src="https://raw.githubusercontent.com/Shiham123/Img_for_All/master/car-project/about_us/person.jpg"
            alt=""
            className="w-10/12 rounded-lg"
          />
          <img
            src="https://raw.githubusercontent.com/Shiham123/Img_for_All/master/car-project/about_us/parts.jpg"
            alt=""
            className="absolute top-1/2 border-4 border-white rounded-lg right-8 w-3/5"
          />
        </div>
      </div>
      <div className="px-[2rem]">
        <h6 className="text-fontColor text-[20px] font-bold font-inter py-4">
          About Us
        </h6>
        <h1 className="text-[45px] font-bold font-inter pb-4">
          We are qualified <br /> & of experience <br />
          in this field
        </h1>
        <p className="w-3/4 py-4 font-inter text-[16px] leading-[30px] capitalize text-[#737373]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{' '}
        </p>

        <p className="w-3/4 py-4 font-inter text-[16px] leading-[30px] capitalize text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{' '}
        </p>

        <button className="border-2 rounded-lg border-fontColor bg-fontColor mx-4 px-8 py-4 font-inter text-white font-bold text-[18px] hover:bg-white hover:text-fontColor duration-150">
          Get More Info
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
