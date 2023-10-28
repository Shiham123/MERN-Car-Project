import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AppContext } from '../context/context';

const CheckOut = () => {
  const { id } = useParams();
  const services = useLoaderData();
  const { title, price } = services;

  const context = useContext(AppContext);
  const { user } = context;

  const handleCheckOutForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get('title');
    const price = formData.get('price');
    const date = formData.get('date');
    const email = formData.get('email');
    const userInfo = { title, price, date, email };
  };

  return (
    <div>
      <form action="" onSubmit={handleCheckOutForm}>
        <label htmlFor="title">Title : </label>
        <input type="text" name="title" defaultValue={title} />

        <label htmlFor="price">Price : </label>
        <input type="number" name="price" defaultValue={price} />

        <label htmlFor="Date">Date : </label>
        <input type="date" name="date" />

        <label htmlFor="email">Email :</label>
        <input type="email" name="email" defaultValue={user?.email} />

        <button type="submit">Submit user info</button>
      </form>
    </div>
  );
};

export default CheckOut;
