import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./NewsletterSection.module.css";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Initialize navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    navigate("/subscribe"); // Redirect to SubscribePage
  };

  return (
    <section className={styles.newsletterSection}>
      <div className={styles.newsletterContent}>
        <h2>
          Nyhedesbrev
          <p>Få nyhederne fra gården på din mail.</p>
        </h2>
        <small>
          Tilmeld dig vores nyhedesbrev - så kan du altid følge med i, hvad der
          sker på farmen.
        </small>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Din email"
          required
          className={styles.input}
        />

        <button type="submit" className={styles.subscriptionButton}>
          Tilmeld
        </button>
      </form>
    </section>
  );
};

export default NewsletterSection;
