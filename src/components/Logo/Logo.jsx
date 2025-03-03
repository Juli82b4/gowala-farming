import React from "react";
import logo from "../../assets/logo.png";
import styles from "./logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="Gowala Farms Logo" />
    </div>
  );
};

export default Logo;
