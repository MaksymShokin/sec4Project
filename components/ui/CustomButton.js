import Link from 'next/link';
import classes from './customButton.module.css';

const CustomButton = ({ link, children, onClick }) => {
  if (!link) {
    return (
      <button onClick={onClick} className={classes.btn}>
        {children}
      </button>
    );
  }

  return (
    <Link href={link}>
      <a className={classes.btn}> {children}</a>
    </Link>
  );
};

export default CustomButton;
