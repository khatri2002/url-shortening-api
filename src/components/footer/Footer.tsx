import {
  IconFacebook,
  IconInstagram,
  IconPinterest,
  IconTwitter,
  Logo,
} from "../../assets/images";
import styles from "./Footer.module.scss";
import commonStyles from "../../commonStyles.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <h2>Boost your links today</h2>
        <button>Get Started</button>
      </div>
      <footer className={styles.footer}>
        <div className={`${commonStyles.container} ${styles.fContainer}`}>
          <div className={styles.img}>
            <img src={Logo} alt="logo" />
          </div>
          <div className={styles.col}>
            <span className={styles.title}>Features</span>
            <ul>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div className={styles.col}>
            <span className={styles.title}>Resources</span>
            <ul>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div className={styles.col}>
            <span className={styles.title}>Company</span>
            <ul>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className={styles.socials}>
            <img src={IconFacebook} alt="icon-facebook" />
            <img src={IconTwitter} alt="icon-twitter" />
            <img src={IconPinterest} alt="icon-pinterest" />
            <img src={IconInstagram} alt="icon-instagram" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
