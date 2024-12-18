import { useState } from "react";

import classNames from "classnames";
import { RxHamburgerMenu } from "react-icons/rx";

import styles from "./Navbar.module.scss";
import commonStyles from "../../commonStyles.module.scss";

import { Logo } from "../../assets/images";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <nav className={commonStyles.container}>
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
    </nav>
  );
};

export default Navbar;
