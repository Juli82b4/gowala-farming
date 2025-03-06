import React from "react";
import styles from "./productsection.module.css";
import useProducts from "../../hooks/useProducts";
import { FaShoppingCart } from "react-icons/fa";

export const ProductSection = ({
  productHeading,
  subheading,
  productsubtext,
}) => {
  const { products, loading, error } = useProducts();
  const displayedProducts = products.slice(0, 5);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex(
      (item) => item._id === product._id
    );

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].count += 1;
    } else {
      product.count = 1;
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.productSection}>
      <div className={styles.header}>
        <h1 className={styles.productHeading}>{productHeading}</h1>
        <h2 className={styles.subheading}>{subheading}</h2>
        <p className={styles.productsubtext}>{productsubtext}</p>
      </div>

      <div className={styles.products}>
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product) => (
            <div key={product._id} className={styles.product}>
              <div className={styles.productImageWrapper}>
                <img
                  src={product.image}
                  alt={product.title}
                  className={styles.productImage}
                />
              </div>

              <div className={styles.productDetails}>
                <h2>{product.title}</h2>
                <p className={styles.productDescription}>
                  {product.description}
                </p>
                <h3>{product.price.toFixed(2)},-</h3>
                <button
                  className={styles.addToCartButton}
                  onClick={() => addToCart(product)}
                >
                  <FaShoppingCart className={styles.cartIcon} />
                  Tilføj til kurv
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.noProducts}>Ingen produkter tilgængelig</div>
        )}
      </div>

      <div className={styles.buttonWrapper}>
        <button className={styles.viewAllButton}>Se alle produkter</button>
      </div>
    </div>
  );
};

export default ProductSection;
