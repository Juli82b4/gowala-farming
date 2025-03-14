import React from "react";
import styles from "./contactsection.module.css";
import { FaPhone, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className={styles.contactSection}>
      <form className={styles.contactForm}>
        <div className={styles.formGroup + " " + styles.formGroupHeading}>
          <h2>Send en besked til os</h2>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="name"></label>
          <input type="text" id="name" name="name" placeholder="Dit navn" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email"></label>
          <input type="email" id="email" name="email" placeholder="Din email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message"></label>
          <textarea id="message" name="message" placeholder="Din besked" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>

      <div className={styles.contactInfo}>
        <h2>Hurtig kontakt</h2>
        <p>
          Har du spørgsmål eller ønsker du at høre mere om vores produkter?
          Kontakt os – vi står altid klar til at hjælpe!
        </p>
        <div className={styles.footerIcons}>
          <div>
            <FaPhone />
            <small>
              +88130-589-745-6987 <br />
              +1655-456-532
            </small>
          </div>
          <div>
            <FaClock />
            <small>
              Mon-Fri 09:00 - 18:00 <br />
              (except public holidays)
            </small>
          </div>
          <div>
            <FaMapMarkerAlt />
            <small>
              25/2 Lane2 Vokte Street Building <br />
              Melborn City
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
