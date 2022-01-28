import styles from "./styles/buttonPage.module.scss";
import { useState, useEffect } from "react";
interface Props {
  clicked: boolean;
  handleClick: Function;
}

const ButtonPage = (props: Props) => {
  const [hovered, setHovered] = useState(false);
  const [currPosition, setCurrPosition] = useState(0);
  const ROLES = [
    <span className={styles.swe}>Software Engineer</span>,
    <span className={styles.mp}>Music Producer</span>,
    <span className={styles.ge}>Gym Enthusiast</span>,
  ];

  useEffect(() => {
    const incrementer = setInterval(incrementCurr, 2000);
    return () => {
      clearInterval(incrementer);
    };
  });

  const incrementCurr = () => {
    if (currPosition === 2) {
      setCurrPosition(0);
    } else {
      setCurrPosition(currPosition + 1);
    }
  };

  return (
    <div className={styles.buttonPageContainer}>
      <div className={styles.title}>
        Hey i'm <span className={styles.nameTitle}>Anthony Huang</span>! I am a{" "}
        {ROLES[currPosition]}
      </div>
      {hovered ? (
        <div className={styles.description}>Welcome to my personal site!</div>
      ) : (
        <div></div>
      )}
      <button
        className={styles.enterButton}
        onClick={() => props.handleClick(true)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Enter 🏃
      </button>
    </div>
  );
};

export default ButtonPage;
