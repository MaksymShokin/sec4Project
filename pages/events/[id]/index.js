import { useRouter } from 'next/router';
import { getEventById } from '../../../dummy';
import EventSummary from '../../../components/EventDetail/EventSummary';
import EventLogistics from '../../../components/EventDetail/EventLogistics';
import EventContent from '../../../components/EventDetail/EventContent';

const EventDetailPage = () => {
  const { query } = useRouter();

  const eventData = getEventById(query.id);

  if (!eventData) {
    return <div>Event not found</div>;
  }

  return (
    <>
      <EventSummary title={eventData.title} />
      <EventLogistics
        date={eventData.date}
        address={eventData.location}
        image={eventData.image}
        imageAlt={eventData.title}
      />
      <EventContent>{eventData.description}</EventContent>
    </>
  );
};

export default EventDetailPage;
