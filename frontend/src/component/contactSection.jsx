const ContactSection = () => {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:justify-around md:items-center lg:flex-row lg:justify-around lg:items-center bg-[#151515] my-10 py-10 rounded-lg">
      <div className="flex gap-8">
        <img
          src="https://raw.githubusercontent.com/Shiham123/Img_for_All/master/car-project/Contact/001-timetable.png"
          className="w-1/8 h-fit pt-3"
          alt=""
        />
        <div>
          <p className="text-[16px] text-white font-inter">
            We are open monday-friday
          </p>
          <p className="text-[25px] font-bold text-white font-inter">
            7:00 am - 9:00 pm
          </p>
        </div>
      </div>
      {/*  */}
      <div className="flex gap-8">
        <img
          src="https://raw.githubusercontent.com/Shiham123/Img_for_All/master/car-project/Contact/Group%2034.png"
          alt=""
          className="w-1/8 h-fit pt-3"
        />
        <div>
          <p className="text-[16px] text-white font-inter">Have a question?</p>
          <p className="text-[25px] font-bold text-white font-inter">
            +2546 251 2658
          </p>
        </div>
      </div>
      {/*  */}
      <div className="flex gap-8">
        <img
          src="https://raw.githubusercontent.com/Shiham123/Img_for_All/master/car-project/Contact/Group%2035.png"
          alt=""
          className="w-1/8 h-fit pt-3"
        />
        <div>
          <p className="text-[16px] text-white font-inter">
            Need a repair? our address
          </p>
          <p className="text-[25px] font-bold text-white font-inter">
            Liza Street, New York
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
