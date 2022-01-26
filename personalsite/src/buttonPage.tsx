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
        Hey it's Anthony Huang. Welcome to my site!
      </div>
      {hovered && (
        <div className={styles.description}>
          A <span>software engineer</span>, <span>music producer</span> and{" "}
          <span>gym enthusiast</span>.
        </div>
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
