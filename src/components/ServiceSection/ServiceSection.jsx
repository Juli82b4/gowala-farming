import React from "react";
import styles from "./servicesection.module.css";

const ServiceSection = () => {
  return (
    <div className={styles.cardSection}>
      <div className={styles.cardHeading}>
        <h1>Den førende mælkproducent</h1>
        <p>Sund og nærende mælk siden 1975</p>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src="src/assets/cards/01.png" alt="Farmens teknologi" />
          <h2>Farmens teknologi</h2>
          <p>
            Vores avancerede teknologi kombinerer effektivitet med høj
            hygiejnestandard, hvilket garanterer produkter af den bedste
            kvalitet.
          </p>
        </div>
        <div className={styles.card}>
          <img src="src/assets/cards/02.png" alt="Farmens landmæend" />
          <h2>Farmens landmæend</h2>
          <p>
            Landmændene hos Gowala Farms er dedikeret til dyrevelfærd og
            bæredygtigt landbrug, hvor omsorg for køerne altid kommer i første
            række.
          </p>
        </div>
        <div className={styles.card}>
          <img
            src="src/assets/cards/03.png"
            alt="Fra mejeriet til forbrugeren"
          />
          <h2>Fra mejeriet til forbrugeren</h2>
          <p>
            Transporten fra mejeriet til butikken foregår hurtigt og skånsomt
            for at bevare produkternes friskhed og kvalitet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
