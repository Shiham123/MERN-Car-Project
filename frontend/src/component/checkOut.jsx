import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AppContext } from '../context/context';

const CheckOut = () => {
  const { id } = useParams();
  const services = useLoaderData();
  const { title, price, _id } = services;

  const context = useContext(AppContext);
  const { user, logOut } = context;
  console.log(user);

  const handleLogout = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

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
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default CheckOut;
