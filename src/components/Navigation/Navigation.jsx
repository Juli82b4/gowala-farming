import React, { useState } from "react";
import styles from "./navigation.module.css";
import Logo from "../Logo/Logo";
import { FaShoppingBag } from "react-icons/fa"; // Import the shopping bag icon

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navigation}>
      <Logo />

      <div className={styles.menuIcons}>
        <div
          className={styles.burgerMenu}
          onClick={toggleMenu}
          aria-expanded={isOpen}
        >
          <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
          <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
          <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
        </div>
        <FaShoppingBag className={styles.cartIcon} /> {/* Add the shopping bag icon */}
      </div>

      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/shop">Shop</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/checkout">Checkout</a>
        </li>
        <li>
          <a href="/backoffice">Backoffice</a>
        </li>
        <li>
          <a href="/backoffice/products">Products</a>
        </li>
        <li>
          <a href="/backoffice/orders">Orders</a>
        </li>
        <li>
          <a href="/backoffice/messages">Messages</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;