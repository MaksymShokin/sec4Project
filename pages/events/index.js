import { getAllEvents } from '../../dummy';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { useRouter } from 'next/router';

const AllEventsPage = () => {
  const allEvents = getAllEvents();
  const router = useRouter();

  const onSearch = (month, year) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <div>
      <EventsSearch onSearch={onSearch} />
      <EventList items={allEvents} />
    </div>
  );
};

export default AllEventsPage;
