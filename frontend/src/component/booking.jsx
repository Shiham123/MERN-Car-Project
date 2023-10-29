import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/context';
import PerBooking from './perBooking';

const BookingPage = () => {
  const context = useContext(AppContext);
  const { user } = context;
  const [emailData, setEmailData] = useState([]);

  const url = `http://localhost:5000/checkOut?customerEmail=${user?.email}`;

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      credentials: 'include',
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => setEmailData(data))
      .catch((error) => console.log(error));
  }, [url]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/checkOut/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const remainingItem = emailData.filter(
          (emailItem) => emailItem._id !== id
        );
        setEmailData(remainingItem);
      })
      .catch((error) => console.log(error));
  };

  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/checkOut/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ status: 'confirm' }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remainingData = emailData.filter((item) => item._id !== id);
          const updated = emailData.find((item) => item._id === id);
          console.log(updated);
          updated.status = 'confirm';

          const newBooking = [updated, ...remainingData];
          setEmailData(newBooking);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {emailData &&
        emailData.map((item) => {
          const { _id } = item;
          return (
            <PerBooking
              key={_id}
              item={item}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          );
        })}
    </div>
  );
};

export default BookingPage;
