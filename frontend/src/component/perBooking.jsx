const PerBooking = (props) => {
  const { item } = props;
  const { productTitle, productPrice, purchaseDate, customerEmail, serviceId } =
    item;

  return (
    <div>
      <h1>{productTitle}</h1>
    </div>
  );
};

export default PerBooking;
