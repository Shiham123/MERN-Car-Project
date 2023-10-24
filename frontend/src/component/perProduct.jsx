import { Rating } from '@material-tailwind/react';
import { useState } from 'react';

const PerProduct = () => {
  const [rating, setRating] = useState(4);

  const handleRating = (ratingValue) => {
    setRating(ratingValue);
  };
  return (
    <div className="flex justify-center items-center flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-8">
      {/* Per card */}
      <div className="flex justify-center items-center flex-col border-2 border-[#E8E8E8] dark:border-fontColor rounded-lg">
        <img
          src="https://raw.githubusercontent.com/Shiham123/Img_for_All/master/car-project/products/1.png"
          alt=""
          className="w-4/6 bg-[#F3F3F3] py-8 px-8 my-4 rounded-lg"
        />
        <Rating value={rating} onChange={handleRating} />
        <h1 className="text-[25px] font-bold font-inter text-[#444] py-4 dark:text-white">
          Car Engine Plug
        </h1>
        <p className="text-[20px] font-semibold font-inter py-4 text-fontColor">
          $20.00
        </p>
      </div>

      {/* Per card */}
      <div className="flex justify-center items-center flex-col border-2 border-[#E8E8E8] dark:border-fontColor rounded-lg">
        <img
          src="https://raw.githubusercontent.com/Shiham123/Img_for_All/master/car-project/products/2.png"
          alt=""
          className="w-4/6 bg-[#F3F3F3] py-8 px-8 my-4 rounded-lg"
        />
        <Rating value={rating} onChange={handleRating} />
        <h1 className="text-[25px] font-bold font-inter text-[#444] py-4 dark:text-white">
          Car Air Filter
        </h1>
        <p className="text-[20px] font-semibold font-inter py-4 text-fontColor">
          $20.00
        </p>
      </div>
      {/* Per card */}
      <div className="flex justify-center items-center flex-col border-2 border-[#E8E8E8] dark:border-fontColor rounded-lg">
        <img
          src="https://raw.githubusercontent.com/Shiham123/Img_for_All/master/car-project/products/3.png"
          alt=""
          className="w-10/12 bg-[#F3F3F3] py-8 px-8 my-4 rounded-lg"
        />
        <Rating value={rating} onChange={handleRating} />
        <h1 className="text-[25px] font-bold font-inter text-[#444] py-4 dark:text-white">
          Cools Led Light
        </h1>
        <p className="text-[20px] font-semibold font-inter py-4 text-fontColor">
          $20.00
        </p>
      </div>
      {/* Per card */}
      <div className="flex justify-center items-center flex-col border-2 border-[#E8E8E8] dark:border-fontColor rounded-lg">
        <img
          src="https://raw.githubusercontent.com/Shiham123/Img_for_All/master/car-project/products/4.png"
          alt=""
          className="w-9/12 bg-[#F3F3F3] py-8 px-8 my-4 rounded-lg"
        />
        <Rating value={rating} onChange={handleRating} />
        <h1 className="text-[25px] font-bold font-inter text-[#444] py-4 dark:text-white">
          Cools Led Light
        </h1>
        <p className="text-[20px] font-semibold font-inter py-4 text-fontColor">
          $20.00
        </p>
      </div>
      {/* Per card */}
      <div className="flex justify-center items-center flex-col border-2 border-[#E8E8E8] dark:border-fontColor rounded-lg">
        <img
          src="https://raw.githubusercontent.com/Shiham123/Img_for_All/master/car-project/products/5.png"
          alt=""
          className="w-4/6 bg-[#F3F3F3] py-8 px-8 my-4 rounded-lg"
        />
        <Rating value={rating} onChange={handleRating} />
        <h1 className="text-[25px] font-bold font-inter text-[#444] py-4 dark:text-white">
          Cools Led Light
        </h1>
        <p className="text-[20px] font-semibold font-inter py-4 text-fontColor">
          $20.00
        </p>
      </div>
      {/* Per card */}
      <div className="flex justify-center items-center flex-col border-2 border-[#E8E8E8] dark:border-fontColor rounded-lg">
        <img
          src="https://raw.githubusercontent.com/Shiham123/Img_for_All/master/car-project/products/6.png"
          alt=""
          className="w-4/6 bg-[#F3F3F3] py-8 px-8 my-4 rounded-lg"
        />
        <Rating value={rating} onChange={handleRating} />
        <h1 className="text-[25px] font-bold font-inter text-[#444] py-4 dark:text-white">
          Cools Led Light
        </h1>
        <p className="text-[20px] font-semibold font-inter py-4 text-fontColor">
          $20.00
        </p>
      </div>
    </div>
  );
};

export default PerProduct;
