import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.logo}>
        <h2>
          RESGATE <span>PETS</span>
        </h2>
      </div>
    </header>
  );
};

export default Header;
