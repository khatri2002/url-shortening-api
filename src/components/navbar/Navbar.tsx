import { useEffect, useState } from "react";

import classNames from "classnames";
import { RxHamburgerMenu } from "react-icons/rx";

import styles from "./Navbar.module.scss";
import commonStyles from "../../commonStyles.module.scss";

import { Logo } from "../../assets/images";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [navbarAppear, setNavbarAppear] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && !navbarAppear) setNavbarAppear(true);
      if (window.scrollY < 10 && navbarAppear) setNavbarAppear(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarAppear]);

  return (
    <nav className={classNames({ [styles.appear]: navbarAppear })}>
      <div className={`${commonStyles.container} ${styles.container}`}>
        <div className={styles.logo}>
          <img src={Logo} alt="logo" />
        </div>
        <div
          className={classNames({
            [styles.navItems]: true,
            [styles.show]: showNavbar,
          })}
        >
          <ul className={styles.nav}>
            <li className={styles.item}>
              <span>Features</span>
            </li>
            <li className={styles.item}>
              <span>Pricing</span>
            </li>
            <li className={styles.item}>
              <span>Resources</span>
            </li>
          </ul>
          <span className={styles.separator} />
          <ul className={styles.action}>
            <li className={styles.item}>
              <button className={styles.login}>Login</button>
            </li>
            <li className={styles.item}>
              <button className={styles.signUp}>Sign Up</button>
            </li>
          </ul>
        </div>
        <div className={styles.iconContainer}>
          <button onClick={() => setShowNavbar((prev) => !prev)}>
            <RxHamburgerMenu className={styles.icon} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
