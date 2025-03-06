import React, { useState, useEffect } from "react";

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
    <div>
      {cart.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <p>Count: {item.count}</p>
          <button onClick={() => incrementCount(index)}>+</button>
          <button onClick={() => decrementCount(index)}>-</button>
        </div>
      ))}
      <h2>Total: {total.toFixed(2)},-</h2>

      <div>
        <input type="email" placeholder="Enter your email" />
        <button onClick={() => alert("Checkout button clicked!")}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderSection;
