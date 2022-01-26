import styles from "./styles/buttonPage.module.scss";

interface Props {
  clicked: boolean;
}

const ButtonPage = (props: Props) => {
  return (
    <div className={styles.buttonPageContainer}>
      <div className={styles.title}>Hey it's Anthony. Welcome to my site!</div>
      <button className={styles.enterButton}>Enter</button>
    </div>
  );
};

export default ButtonPage;
