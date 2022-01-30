import styles from "./styles/buttonPage.module.scss";
import { useState } from "react";
interface Props {
  clicked: boolean;
  handleClick: Function;
}

const ButtonPage = (props: Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className={styles.buttonPageContainer}>
      <div className={styles.title}>
        Hey i'm <span className={styles.nameTitle}>Anthony Huang</span>! Welcome
        to my personal site!
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
