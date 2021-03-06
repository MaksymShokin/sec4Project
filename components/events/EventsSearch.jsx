import CustomButton from '../ui/CustomButton';
import classes from './eventsSearch.module.css';
import { useRef } from 'react';

const EventSearch = ({ onSearch }) => {
  const yearRef = useRef(null);
  const monthRef = useRef(null);

  const onSubmitHandler = event => {
    event.preventDefault();

    const selectedYear = yearRef.current.value;
    const selectedMonth = monthRef.current.value;

    onSearch(selectedMonth, selectedYear);
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor='year'>Year</label>
          <select name='year' id='year' ref={yearRef}>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor='month'>Month</label>
          <select name='month' id='month' ref={monthRef}>
            <option value='3'>February</option>
            <option value='4'>April</option>
            <option value='5'>May</option>
          </select>
        </div>
      </div>
      <CustomButton onClick={() => {}}>Search</CustomButton>
    </form>
  );
};

export default EventSearch;
