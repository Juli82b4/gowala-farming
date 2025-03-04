import React from "react";
import styles from "./servicesection.module.css";

const ServiceSection = () => {
  return (
    <>
      <div className={styles.cardSection}>
        <h1>Den førende mælkproducent </h1>
        <span>Sund og nærende mælk siden 1975</span>

        <div className={styles.cards}>
          <div className={styles.cardOne}>
            <img src="src/assets/cards/01.png" alt="card-pic" />
            <h2>Farmens teknologi</h2>
            <p>
              Vores avancerede teknologi kombinerer effektivitet med høj
              hygiejnestandard, hvilket garanterer produkter af den bedste
              kvalitet.
            </p>
          </div>
          <div className={styles.cardTwo}>
            <img src="src/assets/cards/02.png" alt="card-pic" />
            <h2>Farmens landmæend</h2>
            <p>
              Landmændene hos Gowala Farms er dedikeret til dyrevelfærd og
              bæredygtigt landbrug, hvor omsorg for køerne altid kommer i første
              række.
            </p>
          </div>
          <div className={styles.cardThree}>
            <img src="src/assets/cards/03.png" alt="card-pic" />
            <h2>Fra mejeriet til forbrugeren</h2>
            <p>
              Transporten fra mejeriet til butikken foregår hurtigt og skånsomt
              for at bevare produkternes friskhed og kvalitet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
