import styles from "./styles/navbar.module.scss";
// import { useState } from "react";

const Navbar = () => {

  return (
    <div className={styles.navbarContainer}>
      <div>Anthony Huang</div>
      <ul className={styles.navBarOptions}>
        <li>About</li>
        <li>Technologies</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
