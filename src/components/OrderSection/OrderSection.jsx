import React, { useState, useEffect } from "react";
import styles from "./ordersection.module.css";

const OrderSection = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const incrementCount = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].count += 1;
    updateCart(updatedCart);
  };

  const decrementCount = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].count -= 1;
    if (updatedCart[index].count < 0) {
      updatedCart.splice(index, 1);
    }
    updateCart(updatedCart);
  };

  const total = cart.reduce((acc, item) => acc + item.count * item.price, 0);

  return (
    <div className={styles.orderSection}>
      {cart.map((item, index) => (
        <div key={index} className={styles.cartItem}>
          <div className={styles.itemImageContainer}>
            <img src={item.image} alt={item.name} className={styles.itemImage} />
          </div>
          <div className={styles.itemDetails}>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.itemPrice}>{item.price.toFixed(0)},-</p>
            <div className={styles.itemControls}>
              <button onClick={() => decrementCount(index)} className={styles.decrementButton}>-</button>
              <span className={styles.itemCount}>{item.count}</span>
              <button onClick={() => incrementCount(index)} className={styles.incrementButton}>+</button>
            </div>
            <h2 className={styles.total}> <span>Total</span> {total.toFixed(0)},-</h2>
          </div>
        </div>
      ))}
    
      <div className={styles.totalBox}>
        <h2> <span>I alt </span>{total.toFixed(2)},-</h2>
      </div>
      <div className={styles.checkoutSection}>
        <input type="email" placeholder="Din email" className={styles.emailInput} /><br/><br/>
        <button onClick={() => alert("Checkout button clicked!")} className={styles.checkoutButton}>
          Afgiv ordre
        </button>
      </div>
    </div>
  );
};

export default OrderSection;
