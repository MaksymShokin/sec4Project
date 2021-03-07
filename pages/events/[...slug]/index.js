import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../../dummy';
import EventList from '../../../components/events/EventList.jsx';
import ErrorAlert from '../../../components/ui/error-alert/error-alert';
import ResultsTitle from '../../../components/EventDetail/results-title/results-title';

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
    return <ErrorAlert>No events found</ErrorAlert>;
  }

  return (
    <div>
      <ResultsTitle />
      <EventList items={filteredEvents} />
    </div>
  );
};

export default EventFilterPage;
