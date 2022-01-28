import styles from "./App.module.scss";
import About from "./about";
import { useState } from "react";
import ButtonPage from "./buttonPage";
import Navbar from "./Navbar";
function App() {
  const [clicked, setClicked] = useState(false);

  const renderButtonPage = () => {
    return (
      <>
        <ButtonPage clicked={clicked} handleClick={setClicked} />
      </>
    );
  };

  const renderSiteSections = () => {
    return (
      <>
        <Navbar />
        <section className={styles.about}>
          <About />
        </section>
        <section className={styles.technologies}>Technologies</section>
        <section className={styles.projects}>Projects</section>
        <section className={styles.contact}>Contact</section>
      </>
    );
  };

  return (
    <div className={styles.App}>
      {clicked ? renderSiteSections() : renderButtonPage()}
    </div>
  );
}

export default App;
