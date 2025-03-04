import React from "react";
import styles from "./productsection.module.css";
import useProducts from "../../hooks/useProducts";

export const ProductSection = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.productSection}>
      <div className={styles.header}>
        <h1>Our Products</h1>
        <span>Check out our products</span>
      </div>

      <div className={styles.products}>
        {products.map((product) => (
          <div key={product.id} className={styles.product}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
