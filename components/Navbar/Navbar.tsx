import classes from './Navbar.module.scss';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className={classes.main}>
      <div className={classes.logoText}>
        <h3 >Calvin Luo</h3>
      </div>
    </nav>
  )
}

export default Navbar