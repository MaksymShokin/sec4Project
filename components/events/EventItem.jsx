import Link from 'next/link';
import classes from './eventItem.module.css';

const EventItem = ({ item }) => {
  const formattedDate = new Date(item.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <li className={classes.item}>
      <img src={'/' + item.image} alt={item.title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{item.title}</h2>
          <div className={classes.date}>
            <time>{formattedDate}</time>
          </div>
          <div className={classes.address}>
            <address>{item.location.replace(', ', '\n')}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={{ pathname: 'events/[id]', query: { id: item.id } }}>
            Explore
          </Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
