import { getFeaturedEvents } from '../dummy';
import EventList from '../components/events/EventList';

const EventsPage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default EventsPage;
