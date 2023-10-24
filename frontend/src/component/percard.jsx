import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const PerCard = (props) => {
  const { card } = props;

  const { _id, img, title, price } = card;

  return (
    <Link to={`/cardDetails/${_id}`}>
      <div className="border-[1px] border-[#E8E8E8] flex justify-center items-center flex-col p-4 rounded-lg hover:bg-[#ca464683] duration-500 hover:scale-110">
        <img src={img} alt="" className="w-2/3 object-cover rounded-lg" />
        <h1 className="text-[#444] font-enter font-bold text-[25px] py-4 dark:text-white">
          {title}
        </h1>
        <p className="text-fontColor text-[20px] font-semibold font-inter mb-8">
          Price : ${price}
        </p>
        <button className="bg-fontColor px-2 py-2 rounded-full">
          <AiOutlineArrowRight size={40} color="white" />
        </button>
      </div>
    </Link>
  );
};

export default PerCard;
