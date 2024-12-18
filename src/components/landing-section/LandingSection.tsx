import styles from "./LandingSection.module.scss";
import commonStyles from "../../commonStyles.module.scss";

import { IllustrationWorking } from "../../assets/images";

const LandingSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`${commonStyles.container} ${styles.container}`}>
        <div className={styles.text}>
          <h1 className={styles.title}>More than just shorter links</h1>
          <h2 className={styles.desc}>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </h2>
          <button className={styles.btn}>Get Started</button>
        </div>
        <div className={styles.img}>
          <img src={IllustrationWorking} alt="illustration-working" />
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
