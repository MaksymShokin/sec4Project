import Link from 'next/link';
import classes from './customButton.module.css';

const CustomButton = ({ link, children }) => {
  return (
    <Link className={classes.btn} href={link}>
      <a className={classes.btn}> {children}</a>
    </Link>
  );
};

export default CustomButton;
