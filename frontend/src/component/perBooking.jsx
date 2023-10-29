import { FaTimesCircle } from 'react-icons/fa';

const PerBooking = (props) => {
  const { item, handleDelete, handleUpdate } = props;
  const {
    productTitle,
    productPrice,
    purchaseDate,
    customerEmail,
    serviceId,
    _id,
    status,
  } = item;

  return (
    <div key={serviceId} className="flex justify-around items-center my-8">
      <FaTimesCircle size={40} onClick={() => handleDelete(_id)} />
      <h1 className="text-[20px] text-[#444] leading-[30px] font-semibold font-inter">
        {productTitle}
      </h1>
      <h1 className="text-[20px] text-[#444] leading-[30px] font-semibold font-inter">
        {productPrice}
      </h1>
      <h1 className="text-[20px] text-[#444] leading-[30px] font-semibold font-inter">
        {purchaseDate}
      </h1>
      <h1 className="text-[20px] text-[#444] leading-[30px] font-semibold font-inter">
        {customerEmail}
      </h1>
      {status ? (
        <button
          onClick={() => handleUpdate(_id)}
          className="bg-fontColor text-white font-inter text-[15px] p-2 rounded-lg border-2 border-fontColor hover:bg-transparent hover:text-fontColor duration-500"
        >
          done!
        </button>
      ) : (
        <button
          onClick={() => handleUpdate(_id)}
          className="bg-fontColor text-white font-inter text-[15px] p-2 rounded-lg border-2 border-fontColor hover:bg-transparent hover:text-fontColor duration-500"
        >
          not done !
        </button>
      )}
    </div>
  );
};

export default PerBooking;
