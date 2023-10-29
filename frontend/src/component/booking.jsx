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

  return (
    <div>
      {emailData &&
        emailData.map((item) => {
          const { _id } = item;
          return <PerBooking key={_id} item={item} />;
        })}
    </div>
  );
};

export default BookingPage;
