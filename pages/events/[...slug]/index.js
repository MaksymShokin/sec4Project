import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../../dummy';
import EventList from '../../../components/events/EventList.jsx';

const EventFilterPage = () => {
  const { query } = useRouter();
  const data = query.slug;

  if (!data) {
    return <p className='center'>Loading...</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: +data[0],
    month: +data[1]
  });

  if (!filteredEvents.length) {
    return <div>No events found</div>;
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
};

export default EventFilterPage;
