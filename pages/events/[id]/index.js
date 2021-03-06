import { useRouter } from 'next/router';

const EventDetailPage = () => {
  const { query } = useRouter();

  return <div>This is EventDetailPage</div>;
};

export default EventDetailPage;
