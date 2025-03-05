import React from "react";
import styles from "../components/NewsletterSection/NewsletterSection.module.css"; // Fix import path if needed

const SubscribePage = () => {
  return (
    <div className={styles.subscribePage}>
       <div className={styles.subscribeMessage}>
      <h1 className={styles.subscribeHeading}>
        Tak <span>Kalle!</span>
      </h1>
      <p className={styles.subscribeText}>
        Du har nu tilmeldt dit <br/> vores nyhedsbrev.
      </p>
      </div>
    </div>
  );
};

export default SubscribePage;
