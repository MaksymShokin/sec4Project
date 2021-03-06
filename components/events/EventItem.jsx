import CustomButton from '../ui/CustomButton';
import classes from './eventItem.module.css';
import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';

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
            <DateIcon />
            <time>{formattedDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{item.location.replace(', ', '\n')}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <CustomButton link={`events/${item.id}`}>
            <span>Explore</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </CustomButton>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
