import styles from "./styles/about.module.scss";
import { useState } from "react";
import profilePic from "./files/profilepictureTwo.jpg";
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

  // useEffect(() => {
  //   const incrementer = setInterval(incrementCurr, 3000);
  //   return () => {
  //     clearInterval(incrementer);
  //   };
  // });

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
        <img
          src={profilePic}
          alt="no pic"
          className={styles.profilePicture}
          onClick={() => incrementCurr()}
        />
        <div className={styles.about}>
          <h1>Hey I'm {ROLES[currPosition]}</h1>
          <div className={styles.description}>
            I am a full stack software engineer based in NYC. I started my
            software development journey in June 2021 by attending App Academy,
            an intensive full stack web development bootcamp. Currently, I
            aspire to be more well-rounded as a software engineer with emphasis
            on backend development and data structures and algorithms. My future
            goals are to work in the blockchain and data visualization space.
            <br />
            <br />
            If I'm not programming, you can find me producing music and going to
            the gym.
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
