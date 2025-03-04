import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Footer.module.css";
import { FaPhone, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo className={styles.footerLogo} />
      <div className={styles.footerInfo}>
        <p>
          Gowala Farms er en dedikeret gård, der producerer friske
          mejeriprodukter og kvalitetskød med fokus på dyrevelfærd,
          bæredygtighed og autentisk smag.
        </p>
        <div className={styles.footerIcons}>
          <div>
            <FaPhone />
            <small>
              +88130-589-745-6987
              <br />+ 1655-456-532
            </small>
            <br />
            <br />
          </div>
          <div>
            <FaClock />
            <small>
              Man-Fre 09:00 - 18:00 <br />
              (undtagen helligdage)
            </small>
            <br />
            <br />
          </div>
          <div>
            <FaMapMarkerAlt />
            <small>
              Mejerigade 14 <br />
              Mejeby
            </small>
            <br />
            <br />
          </div>
        </div>
      </div>

      <div className={styles.footerCopyright}>
        © 2024 <span>Gowala</span>. All rights Reserved By <br/>
        <span>LabArtisian</span> & <span>Viborg Media College</span>
      </div>
    </footer>
  );
};

export default Footer;
