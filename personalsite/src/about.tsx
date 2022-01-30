import styles from "./styles/about.module.scss";
import { useEffect, useState } from "react";
const About = () => {
  const [currPosition, setCurrPosition] = useState(0);
  const ROLES = [
    <span className={styles.spanTitle}>Anthony Huang</span>,
    <span className={`${styles.spanTitle} ${styles.swe}`}>
      a Software Engineer
    </span>,
    <span className={`${styles.spanTitle} ${styles.mp}`}>
      a Music Producer
    </span>,
    <span className={`${styles.spanTitle} ${styles.ge}`}>
      a Gym Enthusiast
    </span>,
  ];

  useEffect(() => {
    const incrementer = setInterval(incrementCurr, 3000);
    return () => {
      clearInterval(incrementer);
    };
  });

  const incrementCurr = () => {
    if (currPosition === 3) {
      setCurrPosition(0);
    } else {
      setCurrPosition(currPosition + 1);
    }
  };
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.about}>
          <h1>Hey I'm {ROLES[currPosition]}</h1>
          <div>I am a </div>
        </div>
      </div>
    </>
  );
};

export default About;
