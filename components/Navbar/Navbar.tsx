import { useState } from 'react';
import classes from './Navbar.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const navTabs = [
    'Home',
    'Sold',
    'Buyer Consultation',
    'About Me',
  ]

  const handleClick = (item: string) => {
    setActive(item);
    setToggle(false);
  }

  console.log('toggle', toggle);

  return (
    <nav className={classes.main}>
      <div className={classes.logoContainer}>
        <h3 className={classes.logoText}>Calvin Luo</h3>
      </div>
      <ul className={classes.navbarLinks}>
        {navTabs.map((item, index) => (
          <Link
            href='/'
            key={`link-${item}`}
          >
            <li
              onClick={() => handleClick(item)}
              className={active === item ? `${classes.activeLink}` : ''}
            >
              {item}
            </li>
          </Link>
        ))}
      </ul>

      <div className={classes.mobileMenuContainer}>
        {toggle || <HiMenuAlt4 onClick={() => setToggle(true)} />}
        {toggle && (
          <motion.div
            whileInView={{ x: [200,0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            exit={{ opacity:0}}
            className={classes.mobileMenu}
          >
            <HiX 
              onClick={() => setToggle(false)} 
              className={classes.menuXIcon}
            />
            <ul className={classes.mobileLinks}>
              {navTabs.map((item,index) => (
                <Link 
                  href="/"
                  key={`link-${item}`}
                >
                  <li
                  onClick={() => handleClick(item)}
                  >
                    <div/>
                    <span>
                      {item}
                    </span>
                  </li>
                </Link>
              ))}
            </ul>
            
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar