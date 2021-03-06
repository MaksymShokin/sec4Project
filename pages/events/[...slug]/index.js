import { useRouter } from 'next/router';

const EventFilterPage = () => {
  const { query } = useRouter();

  return <div>This is EventFilterPage</div>;
};

export default EventFilterPage;
