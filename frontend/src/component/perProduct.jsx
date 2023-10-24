import { Rating } from '@material-tailwind/react';
import { useState } from 'react';

const PerProduct = () => {
  const [rating, setRating] = useState(4);

  const handleRating = (ratingValue) => {
    setRating(ratingValue);
  };
  return (
    <div className="flex justify-center items-center flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
      {/* Per card */}
      <div>
        <img
          src="https://raw.githubusercontent.com/Shiham123/Img_for_All/master/car-project/products/1.png"
          alt=""
          className="w-3/6"
        />
        <Rating value={rating} onChange={handleRating} />
        <h1>Car Engine Plug</h1>
        <p>$20.00</p>
      </div>
      {/* Per card */}
      <div>
        <img
          src="https://raw.githubusercontent.com/Shiham123/Img_for_All/master/car-project/products/2.png"
          alt=""
          className="w-3/6"
        />
        <Rating value={rating} onChange={handleRating} />
        <h1>Car Engine Plug</h1>
        <p>$20.00</p>
      </div>
      {/* Per card */}
      <div>
        <img
          src="https://raw.githubusercontent.com/Shiham123/Img_for_All/master/car-project/products/3.png"
          alt=""
          className="w-3/6"
        />
        <Rating value={rating} onChange={handleRating} />
        <h1>Car Engine Plug</h1>
        <p>$20.00</p>
      </div>
    </div>
  );
};

export default PerProduct;
