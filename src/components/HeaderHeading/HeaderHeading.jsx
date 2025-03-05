import React from "react";
import styles from "./HeaderHeading.module.css";

const HeaderHeading = ({ headingtext, subtext }) => {
  return (
    <div className={styles.headerHeading}>
      <h1 className={styles.headingtext}>{headingtext}</h1>
      <p className={styles.subtext}>{subtext}</p>
    </div>
  );
};

export default HeaderHeading;