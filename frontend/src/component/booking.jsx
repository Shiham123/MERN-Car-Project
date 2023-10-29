import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/context';
import PerBooking from './perBooking';

const BookingPage = () => {
  const context = useContext(AppContext);
  const { user } = context;
  const [emailData, setEmailData] = useState([]);

  const url = `http://localhost:5000/checkOut?customerEmail=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setEmailData(data))
      .catch((error) => console.log(error));
  }, []);

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

  return (
    <div>
      {emailData &&
        emailData.map((item) => {
          const { _id } = item;
          return (
            <PerBooking key={_id} item={item} handleDelete={handleDelete} />
          );
        })}
    </div>
  );
};

export default BookingPage;
