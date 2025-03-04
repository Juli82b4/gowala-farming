import React, { useState } from "react";
import styles from "./NewsletterSection.module.css";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
  };

  return (
    <section className={styles.newsletterSection}>
      <div className={styles.newsletterContent}>
        <h2>Nyhedesbrev</h2>
        <p>
          Tilmeld dig vores nyhedesbrev - så kan du altid følgle med i, hvad der
          sker på farmen.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className={styles.input}
        />
        
        <button type="submit" className={styles.button}>
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsletterSection;
