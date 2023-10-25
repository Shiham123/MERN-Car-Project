const ChooseUs = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-fontColor text-[20px] font-bold font-inter capitalize py-4">
          Core Features
        </p>
        <h1 className="text-[#151515] text-[45px] font-bold font-inter capitalize dark:text-white py-4">
          Why Choose Us
        </h1>
        <p className="text-[#737373] font-inter text-[16px] leading-[30px] capitalize w-2/5 text-center py-4">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{' '}
        </p>
      </div>

      {/*  */}
      <div className="flex flex-row justify-center items-center gap-8 my-8">
        <div className="border-2 border-[#E8E8E8] flex flex-col justify-center items-center w-1/6 py-4 hover:bg-fontColor duration-500 rounded-lg">
          <img
            className="bg-white"
            src="https://raw.githubusercontent.com/Shiham123/Img_for_All/master/car-project/Icon/Group%2071.png"
            alt=""
          />
          <h1 className="text-[#444] text-[18px] font-bold font-inter py-4">
            Expert Team
          </h1>
        </div>

        {/*  */}
        <div className="border-2 border-[#E8E8E8] flex flex-col justify-center items-center w-1/6 py-4 hover:bg-fontColor duration-500 rounded-lg">
          <img
            className="bg-black rounded-full"
            src="https://raw.githubusercontent.com/Shiham123/Img_for_All/master/car-project/Icon/Group%2038729.png"
            alt=""
          />
          <h1 className="text-[#444] text-[18px] font-bold font-inter py-4">
            Timely Delivery
          </h1>
        </div>

        {/*  */}
        <div className="border-2 border-[#E8E8E8] flex flex-col justify-center items-center w-1/6 py-4 hover:bg-fontColor duration-500 rounded-lg">
          <img
            className="bg-white"
            src="https://raw.githubusercontent.com/Shiham123/Img_for_All/master/car-project/Icon/Group.png"
            alt=""
          />
          <h1 className="text-[#444] text-[18px] font-bold font-inter py-4">
            24/7 Support
          </h1>
        </div>
        {/*  */}
        <div className="border-2 border-[#E8E8E8] flex flex-col justify-center items-center w-1/6 py-4 hover:bg-fontColor duration-500 rounded-lg">
          <img
            className="bg-white"
            src="https://raw.githubusercontent.com/Shiham123/Img_for_All/master/car-project/Icon/Wrench.png"
            alt=""
          />
          <h1 className="text-[#444] text-[18px] font-bold font-inter py-4">
            Best Equipment
          </h1>
        </div>
        {/*  */}
        <div className="border-2 border-[#E8E8E8] flex flex-col justify-center items-center w-1/6 py-4 hover:bg-fontColor duration-500 rounded-lg">
          <img
            className="bg-white"
            src="https://raw.githubusercontent.com/Shiham123/Img_for_All/master/car-project/Icon/Group%2038730.png"
            alt=""
          />
          <h1 className="text-[#444] text-[18px] font-bold font-inter py-4">
            100% Guranty
          </h1>
        </div>
        {/*  */}
        <div className="border-2 border-[#E8E8E8] flex flex-col justify-center items-center w-1/6 py-4 hover:bg-fontColor duration-500 rounded-lg">
          <img
            className="bg-white"
            src="https://raw.githubusercontent.com/Shiham123/Img_for_All/master/car-project/Icon/Group%2038731.png"
            alt=""
          />
          <h1 className="text-[#444] text-[18px] font-bold font-inter py-4">
            Timely Delivery
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
