import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AppContext } from '../context/context';

const CheckOut = () => {
  const services = useLoaderData();

  const { title, price, _id, img } = services;

  const context = useContext(AppContext);
  const { user } = context;

  const handleCheckOutForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get('title');
    const price = formData.get('price');
    const date = formData.get('date');
    const email = formData.get('email');
    const orderInfo = {
      productTitle: title,
      productPrice: price,
      purchaseDate: date,
      customerEmail: email,
      serviceId: _id,
      img,
    };

    fetch('http://localhost:5000/checkOut', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(orderInfo),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form
        action=""
        onSubmit={handleCheckOutForm}
        className="bg-[#F3F3F3] p-8"
      >
        <div className="flex gap-8 ">
          <input
            type="text"
            name="title"
            defaultValue={title}
            className="outline-none border-2 border-[#e9c4c4] w-1/2 text-[#A2A2A2] font-inter p-4 rounded-lg text-[16px] leading-[30px]"
          />

          <input
            type="number"
            name="price"
            defaultValue={price}
            className="outline-none border-2 border-[#e9c4c4] w-1/2 text-[#A2A2A2] font-inter p-4 rounded-lg text-[16px] leading-[30px]"
          />
        </div>

        <div className="flex gap-8 my-4">
          <input
            type="date"
            name="date"
            className="outline-none border-2 border-[#e9c4c4] w-1/2 text-[#A2A2A2] font-inter p-4 rounded-lg text-[16px] leading-[30px]"
          />
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            className="outline-none border-2 border-[#e9c4c4] w-1/2 text-[#A2A2A2] font-inter p-4 rounded-lg text-[16px] leading-[30px]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-fontColor border-2 border-fontColor text-white py-4 rounded-lg hover:bg-transparent hover:text-fontColor hover:border-fontColor font-inter font-bold tracking-widest text-[20px] duration-500"
        >
          Submit user info
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
