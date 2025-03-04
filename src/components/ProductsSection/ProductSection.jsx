import React from "react";
import styles from "./productsection.module.css";
import useProducts from "../../hooks/useProducts";
import { FaShoppingCart } from "react-icons/fa"; // Import the shopping cart icon

export const ProductSection = () => {
  const { products, loading, error } = useProducts();
  const displayedProducts = products.slice(0, 5);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.productSection}>
      <div className={styles.header}>
        <h1>Vores produkter</h1>
        <span>Vi har udvalgt de bedste produkter</span>
        <p>
          Her finder du et udvalg af friske mejeriprodukter og kvalitetskød fra
          Gowala Farms - direkte fra gården til dit bord.
        </p>
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
                <button className={styles.addToCartButton}>
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