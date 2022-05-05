import { useState } from 'react';
import classes from './Navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [active, setActive] = useState('')

  const navTabs = [
    'Home',
    'Sold',
    'Buyer Consultation',
    'About Me',
  ]

  const handleClick = (item: string) => {
    console.log('item', item)
    setActive(item);
    console.log('active', active)
  }

  return (
    <nav className={classes.main}>
      <div className={classes.logoContainer}>
        <h3 className={classes.logoText}>Calvin Luo</h3>
      </div>
      <ul className={classes.navbarLinks}>
        {navTabs.map((item, index) => (
          <Link
            href='/'
          >
            <li
              onClick={() => handleClick(item)}
              key={`link-${item}`}
              className={active === item ? `${classes.activeLink}` : ''}
            >
              {item}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar