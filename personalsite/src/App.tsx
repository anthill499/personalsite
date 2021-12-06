import styles from "./App.module.scss";
import About from "./about";
function App() {
  return (
    <div className={styles.App}>
      <section className={styles.about}>
        <About />
      </section>
      <section className={styles.technologies}>Technologies</section>
      <section className={styles.projects}>Projects</section>
      <section className={styles.contact}>Contact</section>
    </div>
  );
}

export default App;
