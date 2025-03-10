
import React, { useState, useEffect } from "react";
import styles from "./ordersection.module.css";

// Define the OrderSection component
const OrderSection = () => {
  // State to store cart items, initialized as an empty array
  const [cart, setCart] = useState([]);

  // Load cart data from localStorage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || []; // Retrieve cart data from localStorage, or set to empty array if null
    setCart(storedCart); // Update state with retrieved cart data
  }, []);

  // Function to update the cart state and persist it in localStorage
  const updateCart = (updatedCart) => {
    setCart(updatedCart); // Update the cart state
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart to localStorage
  };

  // Function to increase item count in the cart
  const incrementCount = (index) => {
    const updatedCart = [...cart]; // Create a copy of the cart array
    updatedCart[index].count += 1; // Increase the count of the selected item
    updateCart(updatedCart); // Update cart state and localStorage
  };

  // Function to decrease item count or remove item if count is zero
  const decrementCount = (index) => {
    const updatedCart = [...cart]; // Create a copy of the cart array
    updatedCart[index].count -= 1; // Decrease the count of the selected item

    // Remove item from cart if count is below zero
    if (updatedCart[index].count < 0) {
      updatedCart.splice(index, 1); // Remove the item from the cart array
    }

    updateCart(updatedCart); // Update cart state and localStorage
  };

  // Calculate the total cost of the cart
  const total = cart.reduce((acc, item) => acc + item.count * item.price, 0); // Multiply item count by price and sum up

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
