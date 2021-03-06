import { getAllEvents } from '../../dummy';
import EventList from '../../components/events/EventList';

const AllEventsPage = () => {
  const allEvents = getAllEvents();

  return (
    <div>
      <EventList items={allEvents} />
    </div>
  );
};

export default AllEventsPage;