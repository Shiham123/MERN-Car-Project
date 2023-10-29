import { useContext, useEffect } from 'react';
import { AppContext } from '../context/context';

const BookingPage = () => {
  const context = useContext(AppContext);
  const { user } = context;
  console.log(user?.email);

  const url = `http://localhost:5000/checkOut?customerEmail=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  return <div>this is booking page</div>;
};

export default BookingPage;
