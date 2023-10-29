import { useParams } from 'react-router-dom';

const CardDetails = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};

export default CardDetails;
